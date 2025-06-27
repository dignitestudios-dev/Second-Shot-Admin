import React, { useState } from "react";
import PromoForm from "../../../components/app/promocode/PromoForm";
import PromoTable from "../../../components/app/promocode/PromoTable";
import AccessCodeTable from "../../../components/app/accesscod/AccessCodeTable";
// import AccessCodeForm from "../../../components/app/promocode/AccessCodeForm"; // (if needed)

const PromoCode = () => {
  const [activeTab, setActiveTab] = useState("coupon");

  return (
    <div className="bg-white p-5 rounded-md">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("coupon")}
          className={`py-2 px-4 text-sm font-medium transition-all border-b-2 ${
            activeTab === "coupon"
              ? "border-[#6440FB] text-[#6440FB]"
              : "border-transparent text-gray-500 hover:text-[#6440FB]"
          }`}
        >
          Coupon Code
        </button>
        <button
          onClick={() => setActiveTab("access")}
          className={`py-2 px-4 text-sm font-medium transition-all border-b-2 ${
            activeTab === "access"
              ? "border-[#6440FB] text-[#6440FB]"
              : "border-transparent text-gray-500 hover:text-[#6440FB]"
          }`}
        >
          Access Code
        </button>
      </div>

      {activeTab === "coupon" ? (
        <>
          <div className="mt-6">
            <PromoTable />
          </div>
        </>
      ) : (
        <>
          <AccessCodeTable />
        </>
      )}
    </div>
  );
};

export default PromoCode;
