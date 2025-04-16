import { FaXmark } from "react-icons/fa6";
import { FilterIcon } from "../../assets/export";
import { useState } from "react";
import DatePickerTwo from "./DatePickerTwo";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
    <button onClick={() => setIsOpen(!isOpen)}>
      <img
        className="w-[15.37px] h-[15.38px]"
        src={FilterIcon}
        alt="filterIcon"
      />
    </button>
  
    {isOpen && (
      <>
        {/* Overlay for fade effect */}
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
  
        {/* Filter Modal */}
        <div className="bg-[#FFFFFF] absolute -right-2 top-8 z-20 w-[400px] rounded-[13px] shadow-[2px_10px_27px_0px_#00000012] px-3 py-3">
          <div className="flex justify-between border-b p-2">
            <h3 className="text-[18px] font-[600] text-[#000000]">Filter</h3>
            <button onClick={() => setIsOpen(false)}>
              <FaXmark />
            </button>
          </div>
  
          <div className="grid grid-cols-2 mt-3 gap-2">
            <div>
              <label htmlFor="" className="font-[500] text-[14px]">
                Start Date
              </label>
              <DatePickerTwo />
            </div>
            <div>
              <label htmlFor="" className="font-[500] text-[14px]">
                End Date
              </label>
              <DatePickerTwo />
            </div>
          </div>
  
          <div className="flex justify-between gap-2 mt-3">
            <button className="bg-[#DCDCDC] text-[#6A6A6A] text-[16px] font-[500] rounded-[8px] w-full h-[50px]">
              Clear
            </button>
            <button className="bg-[#181818] text-white rounded-[8px] w-full h-[50px]">
              Apply
            </button>
          </div>
        </div>
      </>
    )}
  </div>
  
  );
}
