import React from "react";

const SkeletonTable = () => {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="bg-white rounded-[14px] border border-[#D4D4D4] mt-5">
      <div className="overflow-x-auto rounded-[14px]">
        <table className="w-full text-[14px] font-[400] text-left">
          <thead className="text-[14px] text-[#202224] bg-[#FCFDFD] border-y border-gray-200">
            {/* <tr>
              <th scope="col" className="px-4 py-3 w-12">
                <span className="flex items-center gap-2">
                  <input type="checkbox" disabled />
                  <span>#</span>
                </span>
              </th>
              {["Name", "Email Address", "Phone Number", "Location", "Action"].map((header, index) => (
                <th key={index} scope="col" className="px-4 font-[400] py-3">
                  {header}
                </th>
              ))}
            </tr> */}
          </thead>
          <tbody>
            {skeletonRows.map((_, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-4 py-3 text-[#202224]">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" disabled />
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="w-[43px] h-[43px] rounded-full bg-gray-200 animate-pulse" />
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                </td>
                <td className="px-4 py-3">
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
                </td>
                <td className="px-4 py-3">
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                </td>
                <td className="px-4 py-3">
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
                </td>
                <td className="px-4 py-3">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkeletonTable;
