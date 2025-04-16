import React from "react";
import { FilterIcon, SearchIcon } from "../../../assets/export";
import NotificationTable from "../../../components/app/pushnotification/NotificationTable";
import { useNavigate } from "react-router";
import Filter from "../../../components/global/Filter";

const PushNotification = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[20px] p-3">
      <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[24px] font-[600] text-[#202224]">
          Push Notifications
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
              className="h-[42px] w-[186px] bg-grad-button  rounded-[8px] text-white text-[14px]"
              onClick={() => navigate("/app/create-notification")}
            >
              {" "}
              + Create Notification
            </button>
          </div>
          <div className="bg-grad-button w-[40.15px] h-[41px] flex items-center  justify-center rounded-[8px] ">
            <Filter />
          </div>
        </div>
      </div>
      <NotificationTable />
    </div>
  );
};

export default PushNotification;
