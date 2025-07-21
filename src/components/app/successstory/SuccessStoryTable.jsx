import React, { useState } from "react";
import { Editicon } from "../../../assets/export";
import { RiDeleteBin6Line } from "react-icons/ri";
import StoryDelete from "./StoryDelete";
import EditStoryModal from "./EditStoryModal";
import { useNavigate } from "react-router";
import { useGetSuccess } from "../../../hooks/api/Get";
import Pagination from "../../global/Pagination";
import SkeletonTable from "../../global/SkeletonTable";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../global/Toaster";

const SuccessStoryTable = ({ update, setUpdate }) => {
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deleteLoading, setDeleteloading] = useState(false);
  const { data, loading, pagination } = useGetSuccess(
    `/api/admin/get-success-stories`,
    currentPage,
    { startDate: startDate ? startDate : "", endDate: endDate ? endDate : "" },
    update
  );
  const handleDelete = async (id) => {
    setDeleteloading(true);
    try {
      const response = await axios.delete(`/api/admin/success-stories/${id}`);
      if (response.status === 200) {
        SuccessToast(response?.data?.message);
        setDeleteModal(false);
        setSelectedUser(null);
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast("Delete failed:", error);
    } finally {
      setDeleteloading(false);
    }
  };

  return (
    <div>
      {" "}
      <div>
        <div className="bg-white rounded-[14px]  border border-[#D4D4D4] mt-5">
          <div className="overflow-x-auto rounded-[14px] ">
            {loading ? (
              <SkeletonTable />
            ) : (
              <table className="w-full text-sm font-normal text-left">
                <thead className="text-[#202224] bg-[#FCFDFD] border-y border-gray-200">
                  <tr>
                    <th className="px-4 py-3 w-12">#</th>
                    {[
                      "Name",
                      "First Shot",
                      "Second Shot",
                      "LinkedIn Link",
                      "YouTube Link",
                      "Quote",
                      "Action",
                    ].map((header, i) => (
                      <th key={i} className="px-4 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((user, index) => (
                    <tr
                      key={user.id}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 text-[#202224]">{index + 1}</td>
                      <td className="px-4 py-3 flex items-center gap-3 text-[#202224]">
                        <img
                          src={user?.profile_img}
                          className="w-10 h-10 rounded-full object-cover"
                          alt="Profile"
                        />
                        {user.name}
                      </td>
                      <td className="px-4 py-3 text-[#202224]">
                        {user.profession}
                      </td>
                      <td className="px-4 py-3 text-[#202224]">
                        {user.profession2}
                      </td>
                      <td
                        className="px-4 py-3 max-w-[200px] truncate text-[#202224]"
                        title={user.linkedin_profile}
                      >
                        {user.linkedin_profile}
                      </td>
                      <td
                        className="px-4 py-3 max-w-[200px] truncate text-[#202224]"
                        title={user.youtube_link}
                      >
                        {user.youtube_link}
                      </td>
                      <td className="px-4 py-3 max-w-[300px] break-words whitespace-pre-line text-[#202224]">
                        {user.current_profession}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={Editicon}
                            alt="Edit"
                            className="w-4 h-4 cursor-pointer"
                            onClick={() => {
                              setSelectedUser(user);
                              setEditModal(true);
                            }}
                          />
                          <div
                            onClick={() => {
                              setSelectedUser(user?._id);
                              setDeleteModal(true);
                            }}
                            className="cursor-pointer"
                          >
                            <RiDeleteBin6Line color="#FF5D5D" size={16} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
      </div>
      <StoryDelete
        showModal={deleteModal}
        deleteLoading={deleteLoading}
        handleClose={() => setDeleteModal(false)}
        handleDelete={() => handleDelete(selectedUser)}
      />
      <EditStoryModal
        showModal={editModal}
        data={selectedUser}
        setUpdate={setUpdate}
        setOpen={setEditModal}
        handleClose={() => {
          setEditModal(false);
          setSelectedUser(null);
        }}
      />
    </div>
  );
};

export default SuccessStoryTable;
