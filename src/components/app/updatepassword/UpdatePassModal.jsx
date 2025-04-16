import React from "react";
import { PassowrdUpdateIcon } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";

const UpdatePassModal = ({ showModal, handleClose }) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div className="relative bg-white h-[356px] rounded-[20px] p-6 w-[515px] max-w-md text-center shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={handleClose}
          >
            <RxCross2 size={24} />
          </button>

          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={PassowrdUpdateIcon}
              alt="Password Updated"
              className="mb-6 w-[80px] h-[80px]"
            />
            <h2 className="text-[36px] font-semibold text-[#181818] capitalize mb-2">
              Password Updated!
            </h2>
            <p className="text-[#565656] text-[16px] font-normal">
              Your password has been updated successfully.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdatePassModal;
