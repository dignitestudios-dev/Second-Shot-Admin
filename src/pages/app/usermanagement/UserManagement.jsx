import React, { useContext, useState } from "react";
import Pagination from "../../../components/global/Pagination";
import UsersTable from "../../../components/app/usermanagement/UsersTable";
import Filter from "../../../components/global/Filter";
import { useFilterUsers, useUsers } from "../../../hooks/api/Get";
import SearchInput from "../../../components/global/SearchInput";
import { FaCalendarWeek, FaUserPlus } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";
import axios from "../../../axios";
import { AuthContext } from "../../../context/AuthContext";
const UserManagement = () => {
  const { school, role } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [search, setSearch] = useState();
  const [idpAnswer, setIdpAnswer] = useState("");
  // user filter selections ke liye states
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCareers, setSelectedCareers] = useState(""); // multiple select
  const [selectedHobbies, setSelectedHobbies] = useState([]); // multiple select
  const [blockLoading, setBlockLoading] = useState(false); // multiple select

  const { data: statesCard, loading: statesLoading } =
    useUsers(`/api/admin/states`);
  const { data: sportsData, loading: sportLoading } = useUsers(
    `/api/services/get-sports`
  );
  const { data: hobbiesData, loading: hobbiesLoading } = useUsers(
    `/api/services/get-hobbies`
  );
  const { data: schoolsData, loading: schoolsLoading } =
    useUsers(`/api/admin/schools`);
  const { data: subjectsData, loading: subjectsLoading } = useUsers(
    `/api/services/get-subjects`
  );
  const { data: careersData, loading: careersLoading } = useUsers(
    `/api/admin/get-all-careers`
  );

  const { data, loading, pagination } = useFilterUsers(
    `/api/admin/users`,
    currentPage,
    {
      startDate: startDate || "",
      endDate: endDate || "",
      primary_sport: selectedSport || "",
      school: school || selectedSchool || "",
      subject: selectedSubject || "",
      favorite_hobby: selectedHobbies.length > 0 ? selectedHobbies : "",
      idp_answer: idpAnswer || "",
      career_name: selectedCareers || "",
    },
    search || "",
    update
  );

  const usageCards = [
    {
      key: "todayRegisteredUsers",
      label: "Today Registered Users",
      icon: <FaUserPlus className="text-[#29ABE2] text-[18px]" />,
      bg: "bg-[#E1F7FF]",
      value: statesCard?.todayRegisteredUsers,
      loading: statesLoading,
    },
    {
      key: "thisWeekRegisteredUsers",
      label: "This Week Registered Users",
      icon: <FaCalendarWeek className="text-[#63CFAC] text-[18px]" />,
      bg: "bg-[#E8FFF5]",
      value: statesCard?.thisWeekRegisteredUsers,
      loading: statesLoading,
    },
    {
      key: "thisMonthRegisteredUsers",
      label: "This Month Registered Users",
      icon: <FaCalendarAlt className="text-[#5E2E86] text-[18px]" />,
      bg: "bg-[#F3E9FF]",
      value: statesCard?.thisMonthRegisteredUsers,
      loading: statesLoading,
    },
  ];

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    setSelectedSport("");
    setSelectedSchool("");
    setSelectedSubject("");
    setSelectedCareers("");
    setSelectedHobbies([]);
    setUpdate((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setUpdate((prev) => !prev);
  };
  const handleBlockUser = async (userId, isBlocked) => {
    try {
      setBlockLoading(userId);

      // 🔄 Use PUT request (as per your API)
      const response = await axios.put(`/api/admin/user/${userId}`);

      if (response.status === 200) {
        SuccessToast(
          response?.data?.message || "User status updated successfully!"
        );
        setUpdate((prev) => !prev); // refresh table or state
      }
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
      ErrorToast(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setBlockLoading(false);
    }
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
                showExtraFilters={true}
                sportsData={sportsData}
                schoolsData={school ? [school] : schoolsData}
                subjectsData={subjectsData}
                disableSchoolSelect={!!school} // agar school context se mila hai toh dropdown disable
                hobbiesData={hobbiesData}
                setSelectedSport={setSelectedSport}
                setSelectedSchool={setSelectedSchool}
                setSelectedSubject={setSelectedSubject}
                setSelectedHobbies={setSelectedHobbies}
                selectedHobbies={selectedHobbies}
                careersData={careersData}
                setSelectedCareers={setSelectedCareers}
              />
            </div>
          </div>
        </div>
        {role === "sub-admin" ? (
          <></>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {usageCards?.map((item) => (
              <div
                key={item.key}
                className="bg-white rounded-[20px] h-[100px] flex items-center px-5 shadow-sm"
              >
                <div
                  className={`h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div className="ml-4 flex flex-col">
                  {item.loading ? (
                    <div className="h-[20px] w-[50px] bg-gray-200 rounded-md animate-pulse"></div>
                  ) : (
                    <h1 className="text-[18px] font-[600] text-[#202224]">
                      {item.value ?? 0}
                    </h1>
                  )}
                  <p className="text-[13px] text-[#0A150F80] mt-1">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <UsersTable
          users={data?.users}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          update={update}
          setUpdate={setUpdate}
          loading={loading}
          pagination={pagination}
          handleBlockUser={handleBlockUser}
          blockLoading={blockLoading}
        />
      </div>
    </div>
  );
};

export default UserManagement;
