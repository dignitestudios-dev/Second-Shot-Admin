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
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <div className="p-3">
        <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[32px] font-[600] text-[#202224]">
            Success Stories
          </h1>
          <div className="flex items-center gap-4">
          
            <div>
              <button
                className="h-[42px] w-[110.58px] bg-grad-button  rounded-[8px] text-white text-[14px]"
                onClick={() => setOpen(true)}
              >
                {" "}
                + Add New
              </button>
            </div>
           
          </div>
        </div>
        <SuccessStoryTable update={update} setUpdate={setUpdate} />
        <AddStoryModal
          showModal={open}
          setOpen={setOpen}
          handleClose={() => setOpen(false)}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default SucessStory;
