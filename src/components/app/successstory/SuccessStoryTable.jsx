import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Editicon, Userprofile } from "../../../assets/export";
import Pagination from "../../global/Pagination";
import { RiDeleteBin6Line } from "react-icons/ri";
import StoryDelete from "./StoryDelete";
import EditStoryModal from "./EditStoryModal";
import { useNavigate } from "react-router";

const SuccessStoryTable = ({ users }) => {
    const navigate = useNavigate();
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
  return (
    <div>
      {" "}
      <div>
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
                    "Profession",
                    "Location",
                    "Youtube Link",
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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white  border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 [#202224] ">
                      <span className="flex items-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <span>{user.id}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-[#202224] flex items-center gap-3">
                      <div className="  ">
                        <img
                          src={Userprofile}
                          className="w-[43px] h-[43px] object-contain  "
                          alt=""
                        />
                      </div>
                      {user.name}
                    </td>
                    <td className="px-4 text-[14px] py-3 text-[#202224]">
                      {user.email}
                    </td>
                    <td className="px-4 text-[14px] py-3 text-[#202224]">
                      {user.location}
                    </td>
                    <td className="px-4 text-[14px] py-3 text-[#202224]">
                      {user.youtubeLink}
                    </td>

                    <td className="text-[14px]">
                      <div className="flex items-center gap-3">
                        <img
                          src={Editicon}
                          className="w-[12.53px] cursor-pointer h-[12.53px]"
                          alt=""
                          onClick={() => setEditModal(true)}
                        />
                        <div onClick={() => setDeleteModal(true)} className="cursor-pointer">
                        <RiDeleteBin6Line color="#FF5D5D" size={14} />
                        </div>
                        <button className="text-[#000000]" onClick={()=>navigate('/app/success-detail-profile')}>
                          <IoIosArrowForward className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end ">
            <Pagination />
          </div>
        </div>
      </div>
      <StoryDelete
      showModal={deleteModal}
      handleClose={() => setDeleteModal(false)}
      />
      <EditStoryModal
      showModal={editModal}
        handleClose={() => setEditModal(false)}
      
      />
    </div>
  );
};

export default SuccessStoryTable;
