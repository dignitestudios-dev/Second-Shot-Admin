import React from "react";
import { DashUser, SubsIcon } from "../../../assets/export";
import SubscriptionChart from "../../../components/app/home/Graph";
import { useUsers } from "../../../hooks/api/Get";
import {
  FaRegLightbulb,
  FaRegFileAlt,
  FaRegPaperPlane,
  FaRegSmile,
  FaTasks,
} from "react-icons/fa"; // react-icons se icons
import { MdAccessAlarm } from "react-icons/md";

const Home = () => {
  const { data, loading } = useUsers(`/api/admin/states`);
  const { data: cardUsage, loading: cardLoading } = useUsers(
    "/api/admin/card-usage"
  );
  const { data: goalCard, loading: goalCardLoading } = useUsers(
    "/api/admin/goal-stats"
  );
  const { data: subsCard, loading: subsCardLoading } = useUsers(
    "/api/admin/subscription-stats"
  );

  // card config array
  const usageCards = [
    {
      key: "careerRecommendation",
      label: "Career Recommendations",
      icon: <FaRegLightbulb className="text-[#FFB020]" size={20} />,
      bg: "bg-[#FFF8E7]",
    },
    {
      key: "resumeBuilder",
      label: "Resume Builder",
      icon: <FaRegFileAlt className="text-[#2D9CDB]" size={20} />,
      bg: "bg-[#E8F4FF]",
    },
    {
      key: "personalPlan",
      label: "Personal Plans",
      icon: <FaTasks className="text-[#27AE60]" size={20} />,
      bg: "bg-[#E8FFF1]",
    },
    {
      key: "transferableSkills",
      label: "Transferable Skills",
      icon: <FaRegPaperPlane className="text-[#9B51E0]" size={20} />,
      bg: "bg-[#F5E8FF]",
    },
    {
      key: "successStory",
      label: "Success Stories",
      icon: <FaRegSmile className="text-[#F2994A]" size={20} />,
      bg: "bg-[#FFF2E6]",
    },
    {
      key: "goals",
      label: "Goals",
      icon: <FaTasks className="text-[#56CCF2]" size={20} />,
      bg: "bg-[#E6F9FF]",
    },
  ];
  const GoalusageCards = [
    {
      key: "total",
      label: "Total Goals",
      icon: <FaTasks className="text-[#27AE60]" size={20} />,
      bg: "bg-[#E8FFF1]",
    },
    {
      key: "completed",
      label: "Completed Goals",
      icon: <FaRegPaperPlane className="text-[#9B51E0]" size={20} />,
      bg: "bg-[#F5E8FF]",
    },
    {
      key: "pending",
      label: "Pending Goals",
      icon: <FaRegSmile className="text-[#F2994A]" size={20} />,
      bg: "bg-[#FFF2E6]",
    },
  ];
  // Subscription Cards Config
  const SubscriptionCards = [
    {
      key: "free",
      label: "Free Subscriptions",
      icon: <FaRegSmile className="text-[#FFB020]" size={20} />,
      bg: "bg-[#FFF8E7]",
    },
    {
      key: "monthly",
      label: "Monthly Subscriptions",
      icon: <FaRegFileAlt className="text-[#2D9CDB]" size={20} />,
      bg: "bg-[#E8F4FF]",
    },
    {
      key: "yearly",
      label: "Yearly Subscriptions",
      icon: <FaTasks className="text-[#27AE60]" size={20} />,
      bg: "bg-[#E8FFF1]",
    },
    {
      key: "used_access_codes",
      label: "Access Codes Used",
      icon: <MdAccessAlarm className="text-white" size={20} />,
      bg: "bg-red-400",
    },
  ];

  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#202224] tracking-[-0.11px]">
        Dashboard
      </h2>
      {/* Top Stats */}
      <div className="flex gap-8 mt-5 flex-wrap">
        {/* Users Card */}
        <div className="bg-[#FFFFFF] rounded-[20px] w-[210px] h-[88px] flex items-center">
          <div className="flex items-center gap-2 px-4 py-4">
            <div className="bg-[#E9FAFF] h-[44px] w-[44px] rounded-[12px] flex items-center justify-center">
              <img
                src={DashUser}
                className="w-[22px] h-[22px] object-contain"
                alt=""
              />
            </div>
            <div>
              {loading ? (
                <div className="h-[20px] w-[60px] bg-gray-200 rounded-md animate-pulse"></div>
              ) : (
                <h1 className="text-[#000000] font-[600] capitalize text-[16px]">
                  {data?.activeUsers}
                </h1>
              )}
              <p className="text-[#0A150F80] capitalize text-[12px] tracking-[0.4px] font-[400]">
                Total Users
              </p>
            </div>
          </div>
        </div>

        {/* Subscriptions Card */}
        <div className="bg-[#FFFFFF] rounded-[20px] w-[210px] h-[88px] flex items-center">
          <div className="flex items-center gap-2 px-4 py-4">
            <div className="bg-[#FFF5E1] h-[44px] w-[44px] rounded-[12px] flex items-center justify-center">
              <img src={SubsIcon} className="w-[22px] h-[22px]" alt="" />
            </div>
            <div>
              {loading ? (
                <div className="h-[20px] w-[60px] bg-gray-200 rounded-md animate-pulse"></div>
              ) : (
                <h1 className="text-[#000000] font-[600] capitalize text-[16px]">
                  {data?.subscriptions}
                </h1>
              )}
              <p className="text-[#0A150F80] capitalize text-[12px] tracking-[0.4px] font-[400]">
                Total Subscriptions
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[22px] mt-5 font-[600] text-[#202224] tracking-[-0.11px]">
        Mostly Access Toolbox
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-3">
        {usageCards.map((item) => (
          <div
            key={item.key}
            className="bg-white rounded-[20px] h-[120px] flex flex-col items-center justify-center shadow-sm"
          >
            <div
              className={`h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ${item.bg}`}
            >
              {item.icon}
            </div>
            <h1 className="mt-2 text-[16px] font-[600] text-[#202224]">
              {cardLoading ? (
                <div className="h-[18px] w-[40px] bg-gray-200 rounded-md animate-pulse"></div>
              ) : (
                cardUsage?.[item.key] ?? 0
              )}
            </h1>
            <p className="text-[12px] text-[#0A150F80] text-center mt-1 px-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-[22px] mt-5 font-[600] text-[#202224] tracking-[-0.11px]">
        Goal Analytics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-3">
        {GoalusageCards?.map((item) => (
          <div
            key={item.key}
            className="bg-white rounded-[20px] h-[120px] flex flex-col items-center justify-center shadow-sm"
          >
            <div
              className={`h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ${item.bg}`}
            >
              {item.icon}
            </div>
            <h1 className="mt-2 text-[16px] font-[600] text-[#202224]">
              {goalCardLoading ? (
                <div className="h-[18px] w-[40px] bg-gray-200 rounded-md animate-pulse"></div>
              ) : (
                goalCard?.[item.key] ?? 0
              )}
            </h1>

            <p className="text-[12px] text-[#0A150F80] text-center mt-1 px-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-[22px] mt-5 font-[600] text-[#202224] tracking-[-0.11px]">
        Subscription Stats
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-3">
        {SubscriptionCards?.map((item) => (
          <div
            key={item.key}
            className="bg-white rounded-[20px] h-[120px] flex flex-col items-center justify-center shadow-sm"
          >
            <div
              className={`h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ${item.bg}`}
            >
              {item.icon}
            </div>
            <h1 className="mt-2 text-[16px] font-[600] text-[#202224]">
              {subsCardLoading ? (
                <div className="h-[18px] w-[40px] bg-gray-200 rounded-md animate-pulse"></div>
              ) : (
                subsCard?.[item.key] ?? 0
              )}
            </h1>
            <p className="text-[12px] text-[#0A150F80] text-center mt-1 px-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>{" "}
     
      {/* Chart */}
      <div className="mt-10">
        <SubscriptionChart />
      </div>
    </div>
  );
};

export default Home;
