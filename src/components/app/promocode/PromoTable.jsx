import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../global/Pagination";
import Button from "../../global/Button";
import { useNavigate } from "react-router";
import { useUsers } from "../../../hooks/api/Get";
import { getDateFormat } from "../../../lib/helpers";
import PromoDelete from "./PromoDelete";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
import SkeletonTable from "../../global/SkeletonTable";
const PromoTable = () => {
  const [delteModal, setDeleteModal] = useState(false);
  const [loader, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();
  const { data, loading, pagination } = useUsers(
    "/api/subscription/promo-codes",
    currentPage,
    "",
    "",
    update
  );
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
        setCurrentPage(1)
      }
    } catch (error) {
      console.error("Error deleting promo code:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[28px] font-[600]  ">Promos Code </h2>
        <div>
          <Button
            text={"Create Coupen Code"}
            handleSubmit={() => navigate("/app/generate-promo-code")}
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
                  {[
                    "#",
                    "Coupen Code",
                    "Percentage",
                    "Created At",
                    "Action",
                  ].map((header, index) => (
                    <th key={index} className="px-4 font-[400] py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data?.records?.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium text-[#202224] ">
                      {index}
                    </td>
                    <td className="px-4 py-3 font-medium text-[#202224] ">
                      {item?.code}
                    </td>

                    <td className="px-4 py-3 text-[#202224]">
                      {item?.percent_off}
                    </td>
                    <td className="px-4 py-3 text-[#202224]">
                      {" "}
                      {getDateFormat(item?.createdAt)}
                    </td>

                    <td
                      className="px-4 cursor-pointer py-3"
                      onClick={() => {
                        setSelectedId(item?._id);
                        setDeleteModal(true);
                      }}
                    >
                      <RiDeleteBin6Line color="#FF5D5D" size={14} />
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
      <PromoDelete
        loader={loader}
        showModal={delteModal}
        handleSubmit={handleDelete}
        handleClose={() => setDeleteModal(false)}
      />
    </div>
  );
};

export default PromoTable;
