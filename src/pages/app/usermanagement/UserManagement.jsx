import React, { useState } from "react";
import { FilterIcon, SearchIcon, Userprofile } from "../../../assets/export";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../../../components/global/Pagination";
import UsersTable from "../../../components/app/usermanagement/UsersTable";
import Filter from "../../../components/global/Filter";
import { useUsers } from "../../../hooks/api/Get";

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);
 
  const { data, loading, pagination } = useUsers(
    `/api/admin/users`,
    currentPage,
    update
  );
  
  return (
    <div>
      <div className="p-3">
        <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[32px] font-[600] text-[#202224]">
            User Management
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
            <div className="bg-grad-button w-[40.15px] h-[41px] flex items-center  justify-center rounded-[8px] ">
              <Filter />
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
