import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const BackButton = ({ handleClick, type }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full flex justify-center items-center gap-1 cursor-pointer"
    >
      <IoIosArrowDropleftCircle className="text-lg text-blue-950" />
      <p className="text-[12px] uppercase font-[600] leading-[161%]  text-[#1E3A52] ">
        Back
      </p>
    </button>
  );
};

export default BackButton;
