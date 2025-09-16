import React from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../../global/Button";

const AddSchoolModal = ({
  showModal,
  handleClose,
  onSubmit,
  loading,
  setSchoolName,
  schoolName
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-[16px] p-6 w-[90%] max-w-[500px] shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-[600] text-[#212121]">
            Add New School
          </h2>
          <button
            className="text-gray-600 hover:text-black"
            onClick={handleClose}
          >
            <RxCross2 size={22} />
          </button>
        </div>
        <hr />

        {/* Form */}
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault(); // ✅ prevent reload
            onSubmit();
          }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              required
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter school name"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button text={"Add School"} type={"submit"} loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchoolModal;
