import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../../axios";
import { SuccessToast, ErrorToast } from "../../global/Toaster";
import { useUsers } from "../../../hooks/api/Get";
import Pagination from "../../global/Pagination";
import SkeletonTable from "../../global/SkeletonTable";
import Button from "../../global/Button";
import AccessCodeModal from "./AccessCodeModal";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getDateFormat } from "../../../lib/helpers";

const AccessCodeTable = () => {
  const [accessloader, setAccessLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [accessCodeModal, setAccessCodeModal] = useState(false);
  const [accessCode, setAccessCode] = useState([]);
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState("active"); // 🔹 New Tab State

  const navigate = useNavigate();

  const { data, loading, pagination } = useUsers(
    "/api/admin/access-codes",
    currentPage,
    "",
    "",
    update
  );

  // ✅ Handle Generate Codes
  const handleSubmit = async () => {
    if (!count || count < 1) {
      ErrorToast("Please enter a Number of Codes count");
      return;
    }

    setAccessLoading(true);
    try {
      const response = await axios.post(
        "/api/admin/bulk-generate-access-code",
        { count }
      );
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        setAccessCode(response?.data?.data);
        setAccessCodeModal(true);
        setUpdate((prev) => !prev);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error("Error creating access codes:", error);
      ErrorToast(error?.response?.data?.message || "Something went wrong");
    } finally {
      setAccessLoading(false);
    }
  };
  const handleDownloadPDF = () => {
    if (!filteredCodes || filteredCodes.length === 0) {
      ErrorToast("No active codes to download!");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Active Access Codes", 14, 15);

    const tableColumn = ["#", "Access Code", "Status"];
    const tableRows = [];

    filteredCodes.forEach((item, index) => {
      const codeData = [
        index + 1,
        item.code,
        item.is_used ? "Expired" : "Active",
      ];
      tableRows.push(codeData);
    });

    // ✅ Correct usage for ES modules
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });

    doc.save("Active_Access_Codes.pdf");
  };

  // ✅ Filter Codes Based on Active Tab
  const filteredCodes =
    activeTab === "active"
      ? data?.accessCodes?.filter((item) => !item.is_expired)
      : data?.accessCodes?.filter((item) => item.is_expired);

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-[28px] font-[600]">Access Codes</h2>

        <div className="flex items-end gap-3 ">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold text-sm mb-1">
              Number of Codes
            </label>
            <input
              type="number"
              min={1}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="border border-gray-300 rounded-lg p-3 w-[150px] text-center text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Count"
            />
          </div>
          <Button
            text={"Generate Codes"}
            handleSubmit={handleSubmit}
            loading={accessloader}
          />
        </div>
      </div>
      {/* {activeTab === "active" && (
        <div className="flex justify-end  mt-4">
          <div className=" w-[250px]  mt-4">
            <Button
              text="Download Access Code PDF"
              handleSubmit={handleDownloadPDF}
              loading={false}
            />
          </div>
        </div>
      )} */}

      {/* 🔹 Tabs Section */}
      <div className="flex gap-6 mt-6 border-b border-gray-200">
        {[
          { key: "active", label: "Active Codes" },
          { key: "expired", label: "Expired Codes" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 🔹 Table Section */}
      {loading ? (
        <SkeletonTable />
      ) : (
        <div className="rounded-[14px] border border-[#D4D4D4] mt-4">
          <div className="overflow-x-auto rounded-[14px]">
            {filteredCodes?.length > 0 ? (
              <table className="w-full text-[14px] font-[400] text-left">
                <thead className="text-[14px] text-[#202224] bg-[#FCFDFD] border-y border-gray-200">
                  <tr>
                    {["#", "Access Code", "Status","Start Date","End Date"].map((header, index) => (
                      <th key={index} className="px-4 font-[500] py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredCodes?.map((item, index) => (
                    <tr
                      key={item._id || index}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-[#202224]">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#202224]">
                        {item?.code}
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[12px] font-semibold ${
                            item?.is_expired
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item?.is_expired ? "Expired" : "Active"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-[#202224]">
                        {getDateFormat(item?.access_code_end )}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#202224]">
                        {getDateFormat(item?.access_code_start )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-10 text-gray-500 font-medium">
                No {activeTab === "active" ? "Active" : "Expired"} Codes Found
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <Pagination
              currentPage={pagination?.currentPages}
              totalPages={pagination?.totalPages}
              update={update}
              setUpdate={setUpdate}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}

      {/* ✅ Access Code Modal */}
      <AccessCodeModal
        accessCode={accessCode}
        showModal={accessCodeModal}
        handleClose={() => setAccessCodeModal(false)}
      />
    </>
  );
};

export default AccessCodeTable;
