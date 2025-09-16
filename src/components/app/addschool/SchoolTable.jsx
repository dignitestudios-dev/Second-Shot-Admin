import React from "react";
import { getDateFormat } from "../../../lib/helpers";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const SchoolTable = ({ data, onDelete, onEdit, deleteloading }) => {
  return (
    <div className="overflow-x-auto rounded-[14px]">
      <table className="w-full text-sm font-normal text-left">
        <thead className="text-[#202224] bg-[#FCFDFD] border-y border-gray-200">
          <tr>
            <th className="px-4 py-3 w-12">#</th>
            {["Name", "Last Updated", "Action"].map((header, i) => (
              <th key={i} className="px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((stat, index) => (
            <tr key={stat._id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-3 text-[#202224]">{index + 1}</td>
              <td className="px-4 py-3 text-[#202224]">{stat?.name}</td>
              <td className="px-4 py-3 text-[#202224]">
                {getDateFormat(stat.updatedAt)}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-4">
                  {/* Edit Icon */}
                  <FiEdit2
                    size={16}
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                    onClick={() => onEdit(stat)}
                  />
                  {deleteloading === stat._id ? (
                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <RiDeleteBin6Line
                      size={18}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                      onClick={() => onDelete(stat._id)}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTable;
