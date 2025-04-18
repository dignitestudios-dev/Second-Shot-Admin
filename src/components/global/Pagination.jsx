import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <div className="p-4 flex items-center justify-center gap-1">
        <button
          className={`w-[43px] h-[43px] flex text-[20px] items-center justify-center rounded-[100px] border bg-[#EDEDED] text-[#000000] 
    ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack />
        </button>

        <div
          className={`bg-[#EDEDED] text-[16px] ${
            currentPage === 1 ? "w-[101px]" : "w-[131px]"
          } flex h-[43px] items-center justify-center rounded-[100px] transition-all duration-300`}
        >
          {currentPage > 1 && (
            <button className="w-8 h-8 cursor-default text-center">{currentPage - 1}</button>
          )}

          <button className="w-8 h-8 bg-grad-button rounded-[100px] text-white text-center">
            {currentPage}
          </button>

            {currentPage < totalPages && (
              <button className="w-8 h-8 cursor-default text-center">{currentPage + 1}</button>
            )}
        </div>

        <button
          className={`w-[43px] h-[43px] flex text-[20px] items-center justify-center rounded-[100px] border bg-[#EDEDED] text-[#000000] 
    ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
