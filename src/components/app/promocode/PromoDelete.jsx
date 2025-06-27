import React from "react";
import { DeleteIcon, PassowrdUpdateIcon } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";

const PromoDelete = ({ showModal, handleClose, handleSubmit, loader }) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div className="relative bg-white  rounded-[20px] p-6  max-w-md text-center shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={handleClose}
          >
            <RxCross2 size={24} />
          </button>

          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={DeleteIcon}
              alt="Password Updated"
              className="mb-6 w-[42px] h-[42px]"
            />
            <h2 className="text-[20px] w-[245px] font-[600] text-[#181818] capitalize mb-2">
              Delete Promo Code
            </h2>
            <p className="text-[#565656] text-[13px] font-[400] w-[202px]">
              Are you sure you want to delete this Promo Code?
            </p>
          </div>
          <div className="flex gap-2 justify-center mt-3">
            <button
              className="bg-[#ECECEC] text-[#242424] w-[140px] rounded-[8px] h-[44px] "
              onClick={handleClose}
            >
              No
            </button>
            <button
              onClick={handleSubmit}
              disabled={loader}
              className={`bg-[#EE3131] text-white w-[140px] rounded-[8px] h-[44px] flex items-center justify-center ${
                loader ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loader ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : (
                "Yes"
              )}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PromoDelete;
