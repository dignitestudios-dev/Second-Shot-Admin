import React from "react";
import { DashUser, SubsIcon } from "../../../assets/export";
import SubscriptionChart from "../../../components/app/home/Graph";
import { useUsers } from "../../../hooks/api/Get";

const Home = () => {
  const { data, loading } = useUsers(`/api/admin/states`);

  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#202224] tracking-[-0.11px]">
        Dashboard
      </h2>
      <div className="flex  gap-8 mt-5">
        <div className="bg-[#FFFFFF] rounded-[20px] w-[210px]  h-[88px] flex items-center  ">
          <div className="flex items-center gap-2 px-4 py-4  ">
            <div className="bg-[#E9FAFF] h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ">
              <img
                src={DashUser}
                className="w-[22px] h-[22px] object-contain "
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
                total users
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-[20px] w-[210px] h-[88px] flex items-center ">
          <div className="flex items-center gap-2 px-4 py-4  ">
            <div className="bg-[#FFF5E1] h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ">
              <img src={SubsIcon} className="w-[22px] h-[22px] " alt="" />
            </div>
            <div>
              {" "}
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
      <div className="">
        <SubscriptionChart />
      </div>
    </div>
  );
};

export default Home;
