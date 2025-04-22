import React from "react";
import SkeletonTable from "../../global/SkeletonTable";
import { getDateFormat } from "../../../lib/helpers";

const NotificationTable = ({ data, loading }) => {
  return (
    <div className="bg-white mt-5 rounded-[6px] overflow-hidden">
      {loading ? (
        <SkeletonTable />
      ) : (
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F3F5F7] text-[#787F8C] text-[12px] font-[600] uppercase">
            <tr>
              <th className="p-4">S.No</th>
              <th className="p-4">Title</th>
              <th className="p-4">Description</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-end px-10">Status</th>
            </tr>
          </thead>
          <tbody className="text-[#202224] text-[16px] font-[400]">
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-[#999]">
                  No Data Found
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 align-center">{index + 1}</td>
                  <td className="p-4 align-center font-[400] w-[200px]">
                    {item?.title}
                  </td>
                  <td className="p-4 align-center text-[#18181880] w-[546.52px] text-justify">
                    {item?.message}
                  </td>
                  <td className="p-4 align-center text-[#18181880] text-justify">
                    {getDateFormat(item?.createdAt)}
                  </td>
                  <td className="p-4 align-center flex justify-end">
                    <span className="bg-[#41C54E26] h-[32px] w-[87px] px-4 flex items-center justify-center text-[#41C54E] text-[13px] font-[700] rounded-full">
                      Delivered
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NotificationTable;
