import React from "react";
import { DeleteIcon, PassowrdUpdateIcon } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";

const StoryDelete = ({
  showModal,
  handleClose,
  handleDelete,
  deleteLoading,
}) => {
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
              Delete Success Story
            </h2>
            <p className="text-[#565656] text-[13px] font-[400] w-[202px]">
              Are you sure you want to delete this success story?
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
              onClick={handleDelete}
              disabled={deleteLoading}
              className="bg-[#EE3131] text-white w-[140px] rounded-[8px] h-[44px] flex items-center justify-center"
            >
              {deleteLoading ? "Deleting..." : "Yes"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default StoryDelete;
