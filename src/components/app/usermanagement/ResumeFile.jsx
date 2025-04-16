import React from "react";
import AllResume from "./AllResume";


const dummyResumes = [
  {
    _id: "1",
    createdAt: "2024-04-01T12:00:00Z",
    // Add any other static data AllResume component may need
  },
  {
    _id: "2",
    createdAt: "2024-03-15T08:30:00Z",
  },
  {
    _id: "3",
    createdAt: "2024-02-10T14:45:00Z",
  },
  {
    _id: "4",
    createdAt: "2024-01-20T10:15:00Z",
  },
];

const ResumeFile = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyResumes.map((resumeData, index) => (
          <div
            key={index}
            className="bg-[#E8F5EA] h-[350px] w-full rounded-2xl p-4 shadow-lg relative"
          >
            <h2 className="text-[13px] font-[500] leading-[24.3px] mb-2 text-[#000000] text-left">
              {new Date(resumeData.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </h2>

            <div className="imageBox w-full h-[350px] cursor-pointer">
              <div className="imageInn w-full">
                <AllResume resume={resumeData} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeFile;
