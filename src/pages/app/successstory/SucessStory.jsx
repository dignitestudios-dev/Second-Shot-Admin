import React, { useState } from "react";
import { FilterIcon, SearchIcon, Userprofile } from "../../../assets/export";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../../../components/global/Pagination";
import UsersTable from "../../../components/app/usermanagement/UsersTable";
import SuccessStoryTable from "../../../components/app/successstory/SuccessStoryTable";
import { useNavigate } from "react-router";
import AddStoryModal from "../../../components/app/successstory/AddStoryModal";
import Filter from "../../../components/global/Filter";

const SucessStory = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "Marketing Manager",
      youtubeLink:"www.youtube.com",
      location: "Toronto, Canada",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    ...Array(9)
      .fill(null)
      .map((_, index) => ({
        id: index + 2,
        name: "Christine Brooks",
        email: "Marketing Manager",
        youtubeLink:"www.youtube.com",
        location: "Toronto, Canada",
        avatar: "/placeholder.svg?height=40&width=40",
      })),
  ];
  return (
    <div>
      <div className="p-3">
        <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[32px] font-[600] text-[#202224]">
            Success Stories
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={SearchIcon} className="h-4 w-4 " alt="" />
              </div>
              <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 pr-10"
                placeholder="Search"
              />
            </div>
            <div>
              <button
                className="h-[42px] w-[110.58px] bg-grad-button  rounded-[8px] text-white text-[14px]"
                onClick={() => setOpen(true)}
              >
                {" "}
                + Add New
              </button>
            </div>
            <div className="bg-grad-button w-[40.15px] h-[41px] flex items-center  justify-center rounded-[8px] ">
                       <Filter />
                     </div>
          </div>
        </div>
        <SuccessStoryTable users={users} />
        <AddStoryModal showModal={open} handleClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default SucessStory;
