import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import { useUserDetails } from "../../../hooks/api/Get";
import { getDateFormat } from "../../../lib/helpers";

const CareerDetails = () => {
  const navigate = useNavigate();
  const { id: carrerId } = useParams();

  const { data: carrerDetail, loading } = useUserDetails(
    `/api/admin/career-recommendation-details`,
    carrerId
  );

  const [selectedButton, setSelectedButton] = useState("");
  const [careerFiltered, setCareerFiltered] = useState([]);

  const handleCarrerData = (id) => {
    setSelectedButton(id);
    const filteredData = carrerDetail?.careers?.filter(
      (item) => item?.career?.id === id
    );
    setCareerFiltered(filteredData);
  };
  useEffect(() => {
    if (!loading && carrerDetail?.careers?.length > 0) {
      const firstCareerId = carrerDetail.careers[0]?.career?.id;
      handleCarrerData(firstCareerId);
    }
  }, [loading, carrerDetail]);
  return (
    <div className="p-4">
      <div className="mb-3">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size={17} />
          <p className="text-sm font-medium text-[#202224]">Back</p>
        </div>
        <div>
          <h3 className="text-[24px] font-[600] text-[#202224]  mt-3">
            User Career Recommendation
          </h3>
        </div>
      </div>
      <div className="bg-[#EFEFEF] p-3 rounded-lg mt-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 backdrop-blur-md">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[32px] font-[500] text-[#000000] leading-[43.2px] mb-1">
              Your Recommended Careers are:
            </h1>
            <p className="text-md font-medium text-black">
              {loading ? (
                <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
              ) : (
                getDateFormat(carrerDetail.createdAt)
              )}
            </p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {loading
              ? Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <button
                      key={i}
                      className="bg-gray-200 w-[200px] h-[49px] rounded-lg animate-pulse"
                    />
                  ))
              : carrerDetail?.careers?.map((button, index) => (
                  <button
                    key={index}
                    className={`${
                      selectedButton === button?.career?.id
                        ? "bg-gradient-to-r from-[#061523] to-[#012C57] text-white"
                        : "bg-[#F6F6F6] text-black"
                    } h-[49px] font-medium px-4 rounded-lg`}
                    onClick={() => handleCarrerData(button?.career?.id)}
                  >
                    {button?.career?.name}
                  </button>
                ))}
          </div>

          <hr className="my-4" />

          <div>
            <h3 className="text-[28px] font-[500] text-[#000000] py-2">
              {loading ? (
                <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse" />
              ) : (
                careerFiltered[0]?.career?.name || "No Data Found"
              )}
            </h3>
            <p className="text-black font-[400] text-[16px]">
              {careerFiltered[0]?.career?.description}
            </p>

            {!loading && careerFiltered?.length > 0 && (
              <div className="text-black space-y-2">
                <hr className="my-4" />
                <div className="grid grid-cols-3 divide-x-[1px] gap-4 text-[#011225]">
                  <ul className="pl-8 space-y-3 list-disc list-inside">
                    <h3 className="text-[22px] font-medium text-[#011225]">
                      Sample Job Titles
                    </h3>
                    {careerFiltered[0].career.sample_job_titles.map(
                      (title, i) => (
                        <li
                          key={i}
                          className="font-[500] list-outside text-[18px]"
                        >
                          {title}
                        </li>
                      )
                    )}
                  </ul>

                  <ul className="pl-8 space-y-3 list-disc list-inside">
                    <h3 className="text-[22px] font-medium text-[#011225]">
                      Career Pathways:
                    </h3>

                    {careerFiltered[0].career.career_pathways.map(
                      (pathway, i) => (
                        <li
                          key={i}
                          className="font-[500] list-outside text-[18px]"
                        >
                          {pathway}
                        </li>
                      )
                    )}
                  </ul>

                  <ul className="pl-8 space-y-3 list-disc list-inside">
                    <h3 className="text-[22px] font-medium text-[#011225]">
                      Education & Training:
                    </h3>
                    {careerFiltered[0].career.education_training.map(
                      (edu, i) => (
                        <li
                          key={i}
                          className="font-[500] list-outside text-[18px]"
                        >
                          {edu}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <hr className="my-4" />

                <div>
                  <h3 className="text-[22px] font-[600] leading-[32.67px] text-[#011225]">
                    Career Growth and Opportunities{" "}
                  </h3>
                  <p className="text-[#000000cc]">
                    {careerFiltered[0].career.career_growth_opportunities}
                  </p>
                </div>

                <div>
                  <h3 className="text-[18px] font-medium text-[#011225] mt-2">
                    Explore More
                  </h3>
                  <a
                    href={`${careerFiltered[0].career.career_link}`}
                    target="_blank"
                    className="text-[#0E73D0] underline"
                  >
                    {careerFiltered[0].career.career_link}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
