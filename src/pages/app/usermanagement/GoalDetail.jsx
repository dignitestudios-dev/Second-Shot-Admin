import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import { useUserDetails } from "../../../hooks/api/Get";
import { getDateFormat } from "../../../lib/helpers";
import { GoalSkeleton } from "../../../components/global/Skeleton";


const GoalDetail = () => {
  const navigate = useNavigate();
  const { id: goalId } = useParams();

  const { data, loading } = useUserDetails(`/api/admin/goal-details`, goalId);

  const getBgCardColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-[#EAF8FF]";
      case "Not Started yet":
        return "bg-[#f0340040]";
      case "In Progress":
        return "bg-[#F0C00042]";
      default:
        return "bg-[#FFFFFF]";
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

  return (
    <div>
      {loading ? (
        <GoalSkeleton />
      ) : (
        <>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size={17} />
            <p className="text-sm font-medium text-[#202224]">Back</p>
          </div>

          <h3 className="text-2xl font-semibold text-[#202224] mt-2">
            User's Goal
          </h3>

          <div className="bg-[#EFEFEF] p-3 rounded-lg mt-4">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center flex-wrap">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  Goal Detail
                </h1>
                <div className="  flex items-center gap-3">
                  <p className="text-sm font-medium text-black">
                    Deadline
                    <p className="text-xs text-gray-700">
                      {getDateFormat(data?.createdAt)} |{" "}
                      {getDateFormat(data?.deadline)}
                    </p>
                  </p>
                  <button
                    className={`mt-2 h-[40px] p-2 rounded-md border text-sm ${getBorderColor(
                      data?.status
                    )} ${getBgCardColor(data?.status)}`}
                  >
                    {data?.status}
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-800 font-medium text-base">
                  {data?.main_goal_name}
                </p>
              </div>

              {/* Sub Goals */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-[#222222]">
                    Sub Goals
                  </h2>
                  {data?.sub_goals?.length > 0 &&
                    (() => {
                      const subGoalStatus = data.sub_goals[0].is_completed
                        ? "Completed"
                        : "Not Started yet";
                      return (
                        <p
                          className={`flex items-center h-[40px] p-2 rounded-md border text-sm ${getBorderColor(
                            subGoalStatus
                          )} ${getBgCardColor(subGoalStatus)}`}
                        >
                          {subGoalStatus}
                        </p>
                      );
                    })()}
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  {data?.sub_goals?.length > 0 ? (
                    data?.sub_goals?.map((subGoal, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start border-b last:border-b-0 border-gray-200 py-3"
                      >
                        <div className="flex-1">
                          <p className="text-[16px] font-medium text-gray-800">
                            {subGoal?.name}
                          </p>
                        </div>
                        <div className="text-xs text-right text-gray-600">
                          <p className="text-black font-[400] text-[13px]">
                            {getDateFormat(data?.createdAt)} |{" "}
                            {getDateFormat(subGoal?.deadline)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-center text-gray-500">
                      No Sub Goals Found
                    </p>
                  )}
                </div>
              </div>

              {/* Support People */}
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-[#222222] mb-4">
                  Support People
                </h2>
                {data?.support_people?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data?.support_people?.map((support, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 border border-gray-100"
                      >
                        <h3 className="font-semibold text-lg text-gray-800 mb-4">
                          Support Person{" "}
                          <span className="text-[#56EC17]">({index + 1})</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                          <p>
                            <strong>Full Name:</strong>
                            <br />
                            {support?.full_name}
                          </p>
                          <p>
                            <strong>Email Address:</strong>
                            <br />
                            {support?.email_address}
                          </p>
                          <p>
                            <strong>Phone Number:</strong>
                            <br />
                            {support?.phone_number}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-center text-gray-500">
                    No Support Person Found
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GoalDetail;
