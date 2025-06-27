import { RxCross2 } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";

const AccessCodeModal = ({ showModal, handleClose, accessCode }) => {
  const [copied, setCopied] = useState(false);
  console.log(undefined, "undefined");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accessCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div className="relative bg-white rounded-[20px] p-6 w-full max-w-md text-center shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={handleClose}
          >
            <RxCross2 size={24} />
          </button>

          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-[20px] font-[600] text-[#181818]">
              Access Code
            </h2>

            <div className="flex items-center gap-2 w-full justify-center">
              <input
                type="text"
                readOnly
                value={accessCode}
                className="border border-gray-300 rounded-md px-4 py-2 w-[70%] text-center font-medium text-[#333] bg-gray-100"
              />
              <button
                onClick={handleCopy}
                className="bg-[#6440FB] hover:bg-[#5236cc] text-white p-2 rounded-md transition flex items-center justify-center"
                title="Copy Code"
              >
                <FaRegCopy size={18} />
              </button>
            </div>

            {copied && (
              <p className="text-green-600 text-sm font-medium">
                Code copied to clipboard!
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default AccessCodeModal;
