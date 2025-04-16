import React from "react";
import { useNavigate } from "react-router";

const GoalsCard = () => {
  const navigate = useNavigate();

  const getBgCardColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-[#D4F6ED]";
      case "Not Started yet":
        return "bg-[#f0340040]";
      case "In Progress":
        return "bg-[#F0C00042]";
      default:
        return "text-[#F0C000]";
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
        return "bg-[#FFFFFF]";
    }
  };

  
  const goal = {
    status: "In Progress",
    main_goal_name: "Complete React Project",
    createdAt: "2025-01-01T00:00:00Z",
    deadline: "2025-06-01T00:00:00Z",
    _id: "12345"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-2">
        <div
          className={`p-6 rounded-[22px] relative ${getBgCardColor(goal?.status)}`}
        >
          <div className="flex justify-between items-center mb-4">
            <span
              className={`leading-[39px] h-[39px] w-[120px] text-center rounded-full text-[14px] font-[500] bg-white ${gettextCardColor(goal?.status)}`}
            >
              {goal?.status}
            </span>
          </div>

          <p className="text-md break-words w-full text-gray-600 font-[500] mb-4">
            {goal?.main_goal_name}
          </p>
        </div>
        <div className="flex justify-between items-start text-sm text-black mt-6 pb-3 pr-3">
          <div className="flex flex-col">
            <span className="bg-white p-1 rounded-md font-[500] px-6 text-lg">
              Deadline
            </span>
            <span className="bg-white p-1 px-6 text-black rounded-md mt-[-2px]">
              {goal?.createdAt
                ? new Date(goal?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date selected"}{" "}
              |
              {goal?.deadline
                ? new Date(goal?.deadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date selected"}
            </span>
          </div>
          <button
            onClick={() => navigate(`/app/goal-detail/${goal?._id}`)}
            className="px-4 py-2 text-nowrap text-sm font-[500] text-[#012C57] bg-gray-200 border border-gray-300 rounded-lg mt-3"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalsCard;
