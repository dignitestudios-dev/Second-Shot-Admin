import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";

const GoalDetail = () => {
  const navigate = useNavigate();
  const getBgCardColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-[#EAF8FF]";
      case "Not Started yet":
        return "bg-[#f0340040]";
      case "In Progress":
        return "bg-[#F0C00042]"; // This was missing in your original code
      default:
        return "bg-[#FFFFFF]";
    }
  };

  const gettextCardColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-[#36B8F3]";
      case "Not Started yet":
        return "text-[#f01800]";
      case "In Progress":
        return "text-[#F0C000]";
      default:
        return "text-[#000000]"; // Default text color if no status
    }
  };

  const getBorderColor = (status) => {
    switch (status) {
      case "Completed":
        return "border-[#36B8F3] text-[#36B8F3]";
      case "Not Started yet":
        return "border-[#f01800] text-[#f01800]";
      case "In Progress":
        return "border-[#F0C000] text-[#F0C000]";
      default:
        return "border-gray-300 text-gray-600";
    }
  };

  const goalStatus = "In Progress"; 

  return (
    <div>
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack size={17} />
        <p className="text-[14px] font-[400] text-[#202224] ">Back</p>
      </div>
      <div>
        <h3 className="text-[24px] font-[600] text-[#202224] mt-2 ">Users Goals</h3>
      </div>
      <div className="bg-[#EFEFEF] p-3 rounded-[8px] mt-3">
      <div className="bg-white p-4 rounded-[8px] mt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">Goal Detail</h1>
          <div className="flex space-x-4 items-center">
            <div className="text-center">
              <span className="text-[#000000] text-[18px] block text-left font-[500] ">
                Deadline
              </span>
              <span className="text-black font-[400] text-[13px]">
                January 1, 2022 | January 10, 2022
              </span>
            </div>
            <button
              className={`px-4 py-2 rounded-md border ${getBorderColor(
                goalStatus
              )} ${getBgCardColor(goalStatus)}`}
            >
              {goalStatus}
            </button>
          </div>
        </div>
        <div className="flex mt-4">
          <div></div>
          <p className="text-[#000000] break-words w-full font-[400] text-[16px] leading-[21.6px] px-2">
            Main Goal Here
          </p>
        </div>
        <div>
          <div className="mt-8">
            <div className="bg-white rounded-[16px] shadow-sm p-6 mt-4">
              <div className="flex justify-between items-center">
                <h2 className="font-[600] text-[18px] text-[#222222]">
                  Sub Goal
                </h2>
                <div className="flex justify-between items-center mb-2">
                  <button
                    className={`px-4 py-2 rounded-md border ${getBorderColor(
                      goalStatus
                    )} ${getBgCardColor(goalStatus)}`}
                  >
                    {goalStatus}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3 border-b border-gray-200 last:border-b-0 relative">
                <div className="flex items-start gap-2 py-2 text-[14px]">
                  <input
                    type="checkbox"
                    id="custom-checkbox-1"
                    checked={false}
                    disabled={false}
                    className="h-5 w-5 rounded-md border border-gray-300 bg-white checked:bg-[#012C57] checked:border-[#012C57] appearance-none cursor-pointer"
                  />
                  <div className="flex break-words w-full flex-col">
                    <label className="text-[#0F0F0F] break-words w-[600px] text-[16px] font-semibold">
                      Sub Goal 1
                    </label>
                  </div>
                </div>

                <div className="absolute top-0 right-0 text-[12px] text-[#6B6B6B] mt-2 mr-3">
                  <span className="text-black font-[400] text-[14px]">
                    January 1, 2022 | January 5, 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-[22px] p-6">
              <h2 className="font-semibold text-lg text-gray-800">
                Support Person <span className="text-[#56EC17]">(01)</span>
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-x-4">
                <p className="text-sm break-words border-r border-gray-300 pr-4 grid grid-cols-1">
                  <strong>Full Name:</strong>
                  <span> John Doe </span>
                </p>
                <p className="text-sm break-words border-r border-gray-300 pr-4">
                  <strong>Email Address:</strong> johndoe@example.com
                </p>
                <p className="text-sm grid grid-cols-1">
                  <strong>Phone Number:</strong>
                  <span> +1234567890 </span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[22px] p-6">
              <h2 className="font-semibold text-lg text-gray-800">
                Support Person <span className="text-[#56EC17]">(02)</span>
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-x-4">
                <p className="text-sm break-words border-r border-gray-300 pr-4 grid grid-cols-1">
                  <strong>Full Name:</strong>
                  <span> John Doe </span>
                </p>
                <p className="text-sm break-words border-r border-gray-300 pr-4">
                  <strong>Email Address:</strong> johndoe@example.com
                </p>
                <p className="text-sm grid grid-cols-1">
                  <strong>Phone Number:</strong>
                  <span> +1234567890 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GoalDetail;
