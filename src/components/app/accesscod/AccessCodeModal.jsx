import { RxCross2 } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { useState } from "react";
import jsPDF from "jspdf";

const AccessCodeModal = ({ showModal, handleClose, accessCode }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownloadPDF = () => {
    try {
      setDownloading(true);
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Access Codes", 20, 20);
      doc.setFontSize(12);

      accessCode?.forEach((code, i) => {
        doc.text(`${i + 1}. ${code}`, 20, 40 + i * 10);
      });

      doc.save("Access_Codes.pdf");
    } catch (err) {
      console.error("PDF download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div className="relative bg-white rounded-[20px] max-h-[500px] overflow-y-auto p-6 w-full max-w-md text-center shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={handleClose}
          >
            <RxCross2 size={24} />
          </button>

          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-[20px] font-[600] text-[#181818]">Access Codes</h2>

            {/* 🧾 Download PDF Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className={`flex items-center gap-2 bg-[#6440FB] hover:bg-[#5236cc] text-white px-4 py-2 rounded-md font-medium transition ${
                downloading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <LuDownload size={18} />
              {downloading ? "Downloading..." : "Download PDF"}
            </button>

            <div className="flex flex-col gap-3 w-full">
              {accessCode?.map((code, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 w-full justify-center"
                >
                  <input
                    type="text"
                    readOnly
                    value={code}
                    className="border border-gray-300 rounded-md px-4 py-2 w-[70%] text-center font-medium text-[#333] bg-gray-100"
                  />
                  <button
                    onClick={() => handleCopy(code, index)}
                    className="bg-[#6440FB] hover:bg-[#5236cc] text-white p-2 rounded-md transition flex items-center justify-center"
                    title="Copy Code"
                  >
                    <FaRegCopy size={18} />
                  </button>
                  {copiedIndex === index && (
                    <span className="text-green-600 text-sm font-medium ml-2">
                      Copied!
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AccessCodeModal;
