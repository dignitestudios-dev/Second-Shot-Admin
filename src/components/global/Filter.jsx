import { FaXmark } from "react-icons/fa6";
import { FilterIcon } from "../../assets/export";
import { useState } from "react";
import DatePickerTwo from "./DatePickerTwo";
import HobbiesDropdown from "../app/usermanagement/HobbiesDropdown";

export default function Filter({
  setStartDate,
  setEndDate,
  setUpdate,
  handleClear,
  startDate,
  endDate,
  showExtraFilters = false, // 👈 new prop
  sportsData = [],
  schoolsData = [],
  subjectsData = [],
  hobbiesData = [],
  setSelectedSport,
  setSelectedSchool,
  setSelectedSubject,
  setSelectedHobbies,
  selectedHobbies = [],
  careersData,
  setSelectedCareers,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          className="w-[15.37px] h-[15.38px]"
          src={FilterIcon}
          alt="filterIcon"
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-10"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Filter Modal */}
          <div className="bg-[#FFFFFF] absolute -right-2 top-8 z-20 w-[400px] rounded-[13px] shadow-[2px_10px_27px_0px_#00000012] px-3 py-3">
            <div className="flex justify-between border-b p-2">
              <h3 className="text-[18px] font-[600] text-[#000000]">Filter</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaXmark />
              </button>
            </div>

            {/* Date filters */}
            <div className="grid grid-cols-2 mt-3 gap-2">
              <div>
                <label className="font-[500] text-[14px]">Start Date</label>
                <DatePickerTwo
                  startDate={startDate}
                  setStartDate={setStartDate}
                  setUpdate={setUpdate}
                />
              </div>
              <div>
                <label className="font-[500] text-[14px]">End Date</label>
                <DatePickerTwo
                  startDate={endDate}
                  setStartDate={setEndDate}
                  setUpdate={setUpdate}
                />
              </div>
            </div>

            {/* Extra dropdowns (only if showExtraFilters === true) */}
            {showExtraFilters && (
              <div className="mt-4 space-y-3">
                {/* Sport */}
                <div>
                  <label className="font-[500] text-[14px]">Sport</label>
                  <select
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2 text-sm"
                  >
                    <option value="">All</option>
                    {sportsData?.map((sport) => (
                      <option key={sport.id} value={sport.id}>
                        {sport?.sport_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* School */}
                <div>
                  <label className="font-[500] text-[14px]">School</label>
                  <select
                    onChange={(e) => setSelectedSchool(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2 text-sm"
                  >
                    <option value="">All</option>
                    {schoolsData?.map((school) => (
                      <option key={school.id} value={school.id}>
                        {school.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                {/* <div>
                  <label className="font-[500] text-[14px]">Subject</label>
                  <select
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2 text-sm"
                  >
                    <option value="">All</option>
                    {subjectsData?.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {sub.subject_name}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div>
                  <label className="font-[500] text-[14px]">Carrers</label>
                  <select
                    onChange={(e) => setSelectedCareers(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2 text-sm"
                  >
                    <option value="">All</option>
                    {careersData?.map((careers) => (
                      <option key={careers.id} value={careers.id}>
                        {careers?.career_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Hobbies (multi select) */}
                <HobbiesDropdown
                  hobbiesData={hobbiesData}
                  selectedHobbies={selectedHobbies}
                  setSelectedHobbies={setSelectedHobbies}
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={handleClear}
                className="bg-[#DCDCDC] text-[#6A6A6A] text-[16px] font-[500] rounded-[8px] w-full h-[50px]"
              >
                Clear
              </button>
              <button
                onClick={() => setUpdate((prev) => !prev)}
                className="bg-[#181818] text-white rounded-[8px] w-full h-[50px]"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
