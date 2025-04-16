import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div>
      <div className="p-4 flex items-center justify-center gap-1">
        <button className="w-[43px] h-[43px] text-[20px] flex items-center justify-center rounded-[100px] border  bg-[#EDEDED] text-[#000000] ">
          <IoIosArrowBack  />
        </button>
        <div className="bg-[#EDEDED]  text-[16px] w-[131px] flex h-[43px] items-center justify-center rounded-[100px] ">
          <button className="w-8 h-8 ">
            1
          </button>
          <button className="w-8 h-8 bg-grad-button rounded-[100px] text-white ">
            2
          </button>
          <button className="w-8 h-8 ">
            3
          </button>
        </div>
        <button className="w-[43px] h-[43px] flex text-[20px] items-center justify-center rounded-[100px] border  bg-[#EDEDED] text-[#000000] ">
          <IoIosArrowForward  />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
