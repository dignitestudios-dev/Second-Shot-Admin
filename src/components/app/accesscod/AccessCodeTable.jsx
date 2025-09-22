import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../../axios";
import { SuccessToast, ErrorToast } from "../../global/Toaster";
import { useUsers } from "../../../hooks/api/Get";
import Pagination from "../../global/Pagination";
import SkeletonTable from "../../global/SkeletonTable";
import Button from "../../global/Button";
import AccessCodeModal from "./AccessCodeModal";

const AccessCodeTable = () => {
  const [accessloader, setAccessLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [accessCodeModal, setAccessCodeModal] = useState(false);
  const [accessCode, setAccessCode] = useState([]);
  const [count, setCount] = useState(1); // Number of codes to generate
  const navigate = useNavigate();

  const { data, loading, pagination } = useUsers(
    "/api/admin/access-codes",
    currentPage,
    "",
    "",
    update
  );

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

  return (
    <>
      <div className="flex items-center justify-between ">
        <h2 className="text-[28px] font-[600]">Access Codes</h2>
        <div className="flex items-center gap-2">
          <div className="w-[160px] md:flex-row md:items-center gap-3 ">
            <label className="text-gray-700 font-semibold ">
              Number of Codes
            </label>
            <input
              type="number"
              min={1}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="border border-gray-300 rounded-lg p-3 w-full text-center text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Count"
            />
          </div>
          <div className="mt-5">
            <Button
              text={"Generate Codes"}
              handleSubmit={handleSubmit}
              loading={accessloader}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <SkeletonTable />
      ) : (
        <div className="rounded-[14px] border border-[#D4D4D4] mt-5">
          <div className="overflow-x-auto rounded-[14px]">
            <table className="w-full text-[14px] font-[400] text-left">
              <thead className="text-[14px] text-[#202224] bg-[#FCFDFD] border-y border-gray-200">
                <tr>
                  {["#", "Access Code", "Status"].map((header, index) => (
                    <th key={index} className="px-4 font-[400] py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data?.accessCodes?.map((item, index) => (
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
                          item?.is_used
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item?.is_used ? "Expired" : "Active"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <AccessCodeModal
        accessCode={accessCode}
        showModal={accessCodeModal}
        handleClose={() => setAccessCodeModal(false)}
      />
    </>
  );
};

export default AccessCodeTable;
