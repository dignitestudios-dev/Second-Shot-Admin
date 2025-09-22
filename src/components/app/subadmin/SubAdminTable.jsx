import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "../../global/Pagination";
import SkeletonTable from "../../global/SkeletonTable";
import { getDateFormat } from "../../../lib/helpers";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../global/Toaster";
import { CiTrash } from "react-icons/ci";

const SubAdminTable = ({
  data,
  setUpdate,
  update,
  setCurrentPage,
  loading,
  pagination,
}) => {
  const [deleteLoadingIds, setDeleteLoadingIds] = useState([]);

  const handleDelete = async (id) => {
    setDeleteLoadingIds((prev) => [...prev, id]); // mark this row as loading
    try {
      const res = await axios.delete(`/api/admin/delete/${id}`);
      if (res.status === 200) {
        SuccessToast("Sub Admin deleted successfully!");
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      const msg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Something went wrong";
      ErrorToast(msg);
    } finally {
      setDeleteLoadingIds((prev) => prev.filter((uid) => uid !== id)); // remove loading
    }
  };

  return (
    <div>
      <div>
        {loading ? (
          <SkeletonTable />
        ) : (
          <div className="bg-white rounded-[14px]  border border-[#D4D4D4] mt-5">
            <div className="overflow-x-auto rounded-[14px] ">
              <table className="w-full text-[14px] font-[400] text-left">
                <thead className="text-[14px]  text-[#202224]   bg-[#FCFDFD] border-y border-gray-200">
                  <tr>
                    {["Name", "Email Address", "Created At","Action"].map(
                      (header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-4 font-[400] py-3"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data?.admins?.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-white  border-b hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-[#202224] flex items-center gap-3">
                        <div className="w-[43px] h-[43px] rounded-full bg-grad-button flex items-center justify-center text-white font-semibold">
                          {user?.profile_img ? (
                            <img
                              src={user.profile_img}
                              alt=""
                              className="w-[43px] h-[43px] rounded-full object-cover"
                            />
                          ) : user?.name ? (
                            user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .substring(0, 2)
                          ) : (
                            "NA"
                          )}
                        </div>
                        {user?.name || "Not Found"}
                      </td>

                      <td className="px-4 text-[14px] py-3 text-[#202224]">
                        {user?.email || "Not Found"}
                      </td>
                      <td className="px-4 text-[14px] py-3 text-[#202224]">
                        {getDateFormat(user?.createdAt || "Not Found")}
                      </td>
                      <td className="px-4 py-3 text-[#202224]">
                        <button
                          onClick={() => handleDelete(user?._id)}
                          className="text-red-500 hover:text-red-700 flex items-center gap-1"
                          disabled={deleteLoadingIds.includes(user?._id)} // disable while loading
                        >
                          <CiTrash />{" "}
                          {deleteLoadingIds.includes(user?._id)
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end ">
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
      </div>
    </div>
  );
};

export default SubAdminTable;
