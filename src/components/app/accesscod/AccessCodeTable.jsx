import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
import { useUsers } from "../../../hooks/api/Get";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../global/Pagination";
import SkeletonTable from "../../global/SkeletonTable";
import Button from "../../global/Button";
import AccessCodeModal from "./AccessCodeModal";
const AccessCodeTable = () => {
  const [delteModal, setDeleteModal] = useState(false);
  const [loader, setLoading] = useState(false);
  const [accessloader, setAccessLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [accessCodeModal, setAccessCodeModal] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const navigate = useNavigate();
  const { data, loading, pagination } = useUsers(
    "/api/admin/access-codes",
    currentPage,
    "",
    "",
    update
  );
  const handleSubmit = async () => {
    setAccessLoading(true);
    try {
      const response = await axios.post("/api/admin/generate-access-code");
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        setAccessCode(response?.data?.data?.code);
        setAccessCodeModal(true);
        setUpdate((prev) => !prev);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error("Error creating access code:", error);
    } finally {
      setAccessLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `/api/subscription/promo-code/${selectedId}`
      );
      if (response?.status === 200) {
        SuccessToast("Promo Code deleted successfully");
        setDeleteModal(false);
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      console.error("Error deleting promo code:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[28px] font-[600]  ">Access Code </h2>
        <div>
          <Button
            text={"Create Access Code"}
            handleSubmit={() => handleSubmit()}
            loading={accessloader}
          />
        </div>
      </div>
      {loading ? (
        <SkeletonTable />
      ) : (
        <div className=" rounded-[14px] border border-[#D4D4D4] mt-5">
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
                    key={index}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium text-[#202224] ">
                      {index+1}
                    </td>
                    <td className="px-4 py-3 font-medium text-[#202224] ">
                      {item?.code}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-[12px] font-semibold ${
                          item?.is_used
                            ? "bg-red-100 text-red-700"
                            : " bg-green-100 text-green-700"
                        }`}
                      >
                        {item?.is_used ? "Expired" : "Active"}
                      </span>
                    </td>

                    {/* <td
                      className="px-4 cursor-pointer py-3"
                      onClick={() => {
                        setSelectedId(item?._id);
                        setDeleteModal(true);
                      }}
                    >
                      <RiDeleteBin6Line color="#FF5D5D" size={14} />
                    </td> */}
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
