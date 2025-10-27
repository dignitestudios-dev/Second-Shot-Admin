import React from "react";
import Pagination from "../../global/Pagination";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";
import { getDateFormat, phoneFormater } from "../../../lib/helpers";
import SkeletonTable from "../../global/SkeletonTable";

const UsersTable = ({
  users,
  setUpdate,
  update,
  setCurrentPage,
  loading,
  pagination,
  handleBlockUser,
  blockLoading,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <SkeletonTable />
      ) : (
        <div className="bg-white rounded-[14px]  border border-[#D4D4D4] mt-5">
          <div className="overflow-x-auto rounded-[14px] ">
            <table className="w-full text-[14px] font-[400] text-left">
              <thead className="text-[14px]  text-[#202224]   bg-[#FCFDFD] border-y border-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3 w-12">
                    <span className="flex items-center gap-2">
                      <input type="checkbox" name="" id="" />
                      <span>#</span>
                    </span>
                  </th>
                  {[
                    "Name",
                    "Email Address",
                    "Hobbies",
                    "School",
                    "Sports",
                    // "Created At",
                    "Action",
                  ].map((header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-4 font-[400] py-3"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white  border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 [#202224] ">
                      <span className="flex items-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <span>{user?.id}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-[#202224] flex items-center gap-3">
                      <div className="  ">
                        <img
                          src={user?.profile_img || "https://placehold.co/400"}
                          className="w-[43px] h-[43px] rounded-full object-contain  "
                          alt=""
                        />
                      </div>
                      {user?.name || "Not Found"}
                    </td>
                    <td className="px-4 text-[14px] py-3 text-[#202224]">
                      {user?.email || "Not Found"}
                    </td>
                    <td className="px-4 text-[14px] py-3 text-[#202224]">
                      {user?.favorite_hobby1 || "Not Found"} /{" "}
                      {user?.favorite_hobby2 || "Not Found"}
                    </td>
                    <td className="px-4 max-w-[200px] overflow-hidden truncate whitespace-nowrap text-[14px] py-3 text-[#202224]">
                      {user?.school || "N/A"}
                    </td>
                    <td className="px-4 max-w-[200px] overflow-hidden truncate whitespace-nowrap text-[14px] py-3 text-[#202224]">
                      {user?.primary_sport || "N/A"}
                    </td>

                    {/* <td className="px-4 text-[14px] py-3 text-[#202224]">
                      {getDateFormat(user.createdAt)}
                    </td> */}

                    <td className="px-5 py-3 flex items-center gap-3">
                      <button
                        onClick={() =>
                          handleBlockUser(user._id, user.is_blocked)
                        }
                        disabled={blockLoading === user._id}
                        className={`${
                          user.is_blocked
                            ? "bg-[#202224] "
                            : "bg-red-500 hover:bg-red-600"
                        } text-white text-[13px] px-3 py-1.5 rounded-md transition disabled:opacity-60 flex items-center justify-center min-w-[90px]`}
                      >
                        {blockLoading === user._id ? (
                          <span className="">Processing...</span>
                        ) : user.is_blocked ? (
                          "Unblock"
                        ) : (
                          "Block"
                        )}
                      </button>

                      <button
                        className="text-[#2563EB] hover:text-[#1E40AF] transition"
                        onClick={() =>
                          navigate(`/app/user-detail/${user?._id}`, {
                            state: { user },
                          })
                        }
                      >
                        <IoIosArrowForward className="h-5 w-5" />
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
  );
};

export default UsersTable;
