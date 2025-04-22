import React from "react";
import AllResume from "./AllResume";
import { getDateFormat } from "../../../lib/helpers";
import { ResumeSkeleton } from "../../global/Skeleton";

const ResumeFile = ({ resumeData, resumeloader }) => {
  return (
    <div>
      {resumeloader ? (
        <ResumeSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData?.map((resumeData, index) => (
            <div
              key={index}
              className="bg-[#E8F5EA] h-[350px] w-full rounded-2xl p-4 shadow-lg relative"
            >
              <h2 className="text-[13px] font-[500] leading-[24.3px] mb-2 text-[#000000] text-left">
                {getDateFormat(resumeData.createdAt)}
              </h2>

              <div className="imageBox w-full h-[350px] cursor-pointer">
                <div className="imageInn w-full">
                  <AllResume resume={resumeData} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeFile;
