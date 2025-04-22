import React, { useState } from "react";
import { SearchIcon } from "../../../assets/export";
import NotificationTable from "../../../components/app/pushnotification/NotificationTable";
import { useNavigate } from "react-router";
import Filter from "../../../components/global/Filter";
import { useGetNotification } from "../../../hooks/api/Get";
import SearchInput from "../../../components/global/SearchInput";

const PushNotification = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [update, setUpdate] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data, loading } = useGetNotification(
    `/api/admin/notifications`,
    { startDate: startDate ? startDate : "", endDate: endDate ? endDate : "" },

    update
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setEndDate("");
    setStartDate("");
    setSearchQuery("");
    setUpdate((prev) => !prev);
  };

  const filteredData = data?.filter((item) =>
    item?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-[20px] p-3">
      <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[24px] font-[600] text-[#202224]">
          Push Notifications
        </h1>
        <div className="flex items-center gap-4">
          <SearchInput onChange={handleSearch} value={searchQuery} />

          <div>
            <button
              className="h-[42px] w-[186px] bg-grad-button  rounded-[8px] text-white text-[14px]"
              onClick={() => navigate("/app/create-notification")}
            >
              + Create Notification
            </button>
          </div>
          <div className="bg-grad-button w-[40.15px] h-[41px] flex items-center  justify-center rounded-[8px] ">
            <Filter
              setEndDate={setEndDate}
              setStartDate={setStartDate}
              setUpdate={setUpdate}
              handleClear={handleClear}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
      </div>
      <NotificationTable data={filteredData} loading={loading} />
    </div>
  );
};

export default PushNotification;
