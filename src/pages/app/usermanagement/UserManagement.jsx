import React, { useState } from "react";
import { FilterIcon, SearchIcon, Userprofile } from "../../../assets/export";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../../../components/global/Pagination";
import UsersTable from "../../../components/app/usermanagement/UsersTable";
import Filter from "../../../components/global/Filter";
import { useUsers } from "../../../hooks/api/Get";
import SearchInput from "../../../components/global/SearchInput";

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [search, setSearch] = useState();

  const { data, loading, pagination } = useUsers(
    `/api/admin/users/filter-search`,
    currentPage,
    { startDate: startDate ? startDate : "", endDate: endDate ? endDate : "" },
    search ? search : "",
    update
  );

  const handleClear = () => {
    setEndDate("");
    setStartDate("");
    setSearch("");
    setUpdate((prev) => !prev);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setUpdate((prev) => !prev);
  };
  return (
    <div>
      <div className="p-3">
        <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[32px] font-[600] text-[#202224]">
            User Management
          </h1>
          <div className="flex items-center gap-4">
            <SearchInput onChange={handleSearch} value={search} />
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
        <UsersTable
          users={data?.users}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          update={update}
          setUpdate={setUpdate}
          loading={loading}
          pagination={pagination}
        />
      </div>
    </div>
  );
};

export default UserManagement;
