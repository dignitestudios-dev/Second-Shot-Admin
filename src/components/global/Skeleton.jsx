import React from "react";

export const GoalSkeleton = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="w-24 h-4 bg-gray-200 rounded" />
      <div className="w-1/2 h-6 bg-gray-300 rounded" />
      <div className="bg-white p-6 rounded-lg">
        <div className="w-full h-6 bg-gray-200 rounded mb-4" />
        <div className="w-full h-4 bg-gray-100 rounded mb-2" />
        <div className="w-full h-4 bg-gray-100 rounded mb-2" />
        <div className="w-full h-4 bg-gray-100 rounded mb-2" />
      </div>
      <div className="w-full h-6 bg-gray-200 rounded mt-6" />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-32 bg-gray-100 rounded" />
        <div className="h-32 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export const GoalCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 p-2 animate-pulse"
        >
          <div className="p-6 rounded-[22px] relative bg-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="h-[39px] w-[120px] bg-gray-300 rounded-full"></span>
            </div>
            <div className="w-full h-5 bg-gray-300 rounded mb-2"></div>
            <div className="w-2/3 h-5 bg-gray-300 rounded mb-4"></div>
          </div>

          <div className="flex justify-between items-start text-sm text-black mt-6 pb-3 pr-3">
            <div className="flex flex-col gap-1">
              <span className="bg-gray-200 h-6 w-20 rounded-md"></span>
              <span className="bg-gray-200 h-5 w-40 rounded-md"></span>
            </div>
            <div className="h-[38px] w-[100px] bg-gray-300 rounded-lg mt-3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ResumeSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-[#E8F5EA] h-[350px] w-full rounded-2xl p-4 shadow-lg relative animate-pulse"
          >
            <div className="h-[16px] w-[100px] bg-gray-300 rounded mb-4"></div>

            <div className="imageBox w-full h-[250px] bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </>
  );
};
export const CarrerSkeleton = () => {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="group relative w-full lg:w-[350px] md:w-auto rounded-[24px] p-4 bg-[#F6F8FF] text-black shadow-lg cursor-pointer hover:bg-gradient-to-l from-[#012C57] to-[#061523] hover:text-white transition duration-200 animate-pulse"
          >
            {/* Top Right Circle */}
            <div className="absolute top-4 right-4 bg-gray-300 rounded-full w-6 h-6" />

            {/* Title Skeleton */}
            <div className="flex flex-col text-left mb-4">
              <div className="w-3/4 h-6 bg-gray-300 rounded-md mb-2" />
              <div className="w-2/4 h-6 bg-gray-300 rounded-md" />
            </div>

            {/* Content Skeleton */}
            <div className="space-y-2 mb-6 text-left">
              <div className="w-3/4 h-11 bg-gray-300 rounded-md" />
              <div className="w-2/4 h-11 bg-gray-300 rounded-md" />
            </div>

            {/* Footer Skeleton */}
            <div className="text-sm flex justify-between items-center">
              <div className="w-1/2 h-6 bg-gray-300 rounded-md" />
              <div className="w-11 h-11 bg-gray-300 rounded-full" />
            </div>
          </div>
        ))}
    </>
  );
};

export const TranfserableSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-6 bg-gray-200 rounded w-1/4" />
      <div className="h-5 bg-gray-200 rounded w-1/10" />
      <ul className="space-y-3 ">
        {[...Array(3)].map((_, idx) => (
          <li key={idx}>
            <div className="h-4 bg-gray-200 rounded w-4/10 mb-4" />
            <div className="h-3 bg-gray-200 rounded w-4/6 " />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const GraphSkeleton = () => {
  return (
    <div className="p-[26.83px] bg-white rounded-[13.41px] shadow-[13.41px] mt-5 mb-5 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center gap-4 mb-10">
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="flex gap-10 items-center">
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Chart Skeleton */}
      <div className="relative h-[400px]">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-md"></div>

        {/* Tooltip Skeleton Placeholder */}
        <div
          className="absolute bg-white rounded-lg shadow-lg p-4 z-10"
          style={{
            left: "50%",
            top: "30%",
            minWidth: "150px",
            transform: "translateX(-50%)",
          }}
        >
          <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="h-3 w-12 bg-gray-200 rounded"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
