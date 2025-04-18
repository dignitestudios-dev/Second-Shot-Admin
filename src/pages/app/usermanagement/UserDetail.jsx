import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { SearchIcon, Usersprofile, Youtube } from "../../../assets/export";

import GoalsCard from "../../../components/app/usermanagement/Goals";
import CarrersCards from "../../../components/app/usermanagement/CarrersCards";
import ResumeFile from "../../../components/app/usermanagement/ResumeFile";
import TrasnferableSkills from "../../../components/app/usermanagement/TrasnferableSkills";
import { phoneFormater } from "../../../lib/helpers";

const UserDetail = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("All");
  const buttons = ["All", "Not started yet", "In Progress", "Completed"];
  const tabs = ["Transferable Skills", "Goals", "Careers", "Resume"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { state } = useLocation();
  const { user } = state || {};

  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack size={17} />
        <p className="text-[14px] font-[400] text-[#202224] ">Back</p>
      </div>
      <div className="flex  justify-between mt-3">
        <h2 className="text-[24px] font-[600] text-[#202224] ">
          Profile Detail
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[12px] p-5 mt-5 grid grid-cols-1 md:grid-cols-3 items-center gap-5 ">
        <div className="flex items-center gap-5 col-span-1">
          <img
            src={user?.profile_img || "https://placehold.co/400"}
            alt="Profile"
            className="w-[108px] h-[108px] rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-[32px] font-[600] text-[#0F0F0F]">
              {user?.name}
            </h2>
            <p className="text-gray-500 text-[16px] font-[500]">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="flex justify-start md:justify-center gap-40 col-span-2">
          <div>
            <p className="text-[#565656] text-[16px]">Phone Number</p>
            <p className="text-[16px] font-medium text-[#0F0F0F] text-nowrap">
              +1 {phoneFormater(user?.phone)}
            </p>
          </div>
          <div>
            <p className="text-[#565656] text-[16px]">Location</p>
            <p className="text-[16px] font-medium text-[#0F0F0F] text-nowrap">
              {user.city},{user.state}
            </p>
          </div>
          <div>
            <p className="text-[#565656] text-[16px] ">Subscription</p>
            <p className="text-[16px] font-medium text-[#0F0F0F] text-nowrap">
              Path Finder Plus/{" "}
              <span className="text-[#565656] text-[12px] ">
                {user?.current_subscription_plan || "No Subscription"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="bg-[#FFFFFF] rounded-[8px]  mb-2 w-[834px] ">
          <div className="mt-2 flex items-center px-2">
            {tabs.map((item) => (
              <div
                key={item}
                onClick={() => setActiveTab(item)}
                className={`p-5 w-[206px] text-center justify-center  cursor-pointer flex items-center ${
                  activeTab === item
                    ? "bg-grad-button rounded-[8px] h-[50px] text-white"
                    : "bg-transparent text-[#202224]"
                }`}
              >
                <p className="text-[18px] font-[500]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {activeTab !== "Transferable Skills" && (
          <div>
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={SearchIcon} className="h-4 w-4 " alt="Search Icon" />
              </div>
              <input
                type="text"
                className="bg-white h-[49px] w-[256px] border border-gray-300 text-gray-900 text-sm rounded-lg block  pl-10 p-2.5 pr-10"
                placeholder="Search"
              />
            </div>
          </div>
        )}
      </div>
      {activeTab == "Transferable Skills" && (
        <div className="bg-white p-2 rounded-[8px]">
          <TrasnferableSkills />
        </div>
      )}
      {activeTab == "Goals" && (
        <div className="bg-white p-2 rounded-[8px]">
          <div className="flex space-x-6 mb-6 bg-white p-1 rounded-md">
            {buttons.map((button) => (
              <button
                key={button}
                className={` mx-2 pt-4  text-[16px] font-[#212121] ${
                  selectedButton === button
                    ? "border-b-2 border-b-black "
                    : "text-[#565656]"
                } text-[14px] rounded-sm leading-[18.9px]`}
                onClick={() => setSelectedButton(button)}
              >
                {button}
              </button>
            ))}
          </div>
          <GoalsCard />
        </div>
      )}
      {activeTab == "Careers" && (
        <div className="bg-white p-3 rounded-[8px]">
          <CarrersCards />
        </div>
      )}
      {activeTab == "Resume" && (
        <div className="bg-white p-3 rounded-[8px]">
          <ResumeFile />
        </div>
      )}
    </div>
  );
};

export default UserDetail;
