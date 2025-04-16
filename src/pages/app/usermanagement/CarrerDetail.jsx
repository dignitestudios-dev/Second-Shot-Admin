import React from "react";
import {  IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";


const CareerDetails = () => {
    const navigate =useNavigate()
  const careerFiltered = [
    {
      career: {
        name: "Health Science",
        description:
          "Health and science is a diverse field encompassing various professions dedications to improving human health and understanding teh nature world. From healthcare to scientific research, this cluster offers opportunities to make a positive impact on society.",
        sample_job_titles: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
        ],
        career_pathways: [
          "Junior Developer",
          "Senior Developer",
          "Lead Developer",
        ],
        education_training: [
          "Bachelor’s in Computer Science",
          "Master’s in Software Engineering",
        ],
        career_growth_opportunities:
          "Health and science professionals have opportunities for career advancement and specialization, They may pursue additional certifications, participate in continuing education programs, or transition into leadership roles within healthcare organizations, research institutions, or government agenciesHealth and science professionals have opportunities for career advancement and specialization.  Health and science professionals have opportunities for career advancement and specialization, They may pursue additional certifications, participate in continuing education programs, or transition into leadership roles within healthcare organizations, research institutions, or government agencies Health and science professionals have opportunities for career advancement and specialization, They may pursue additional certifications, participate in continuing education programs, or transition into leadership roles within healthcare organizations, research institutions, or government agencies.",
        career_link: "https://www.example.com/career",
      },
    },
  ];

  const careerdate = {
    createdAt: "2025-04-10T12:00:00Z",
  };

  const loader = false;
  const selectedButton = null;
  const singlecareerload = false;

  const handleCarrerData = (id) => {
    console.log(id);
  };

  const handlesingcareerlike = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="mb-3">
        <div className="flex items-center gap-1 text-[12px] font-[600] leading-[19.32px] tracking-[11.5%] text-[#000000] cursor-pointer">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size={17} />
            <p className="text-[14px] font-[400] text-[#202224] ">Back</p>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-[600] text-[#202224]  mt-3">
            User Career Recommendation
          </h3>
        </div>
      </div>
      <div className="bg-[#EFEFEF] p-3 rounded-[8px]  mt-5">
        <div className="bg-white rounded-3xl shadow-[0px_8px_50px_0px_rgba(0,0,0,0.06)] p-8 backdrop-blur-[100px]">
          <div className="w-full mb-5 flex justify-between items-center">
            <div className="w-[80%]">
              <h1 className="text-[32px] font-[500] text-[#000000] leading-[43.2px] mb-1">
                Recommended Careers are:
              </h1>
            </div>
            <p className="text-[18px] text-[#000000] font-[500]">
              {loader ? (
                <div className="h-6 bg-gray-300 rounded w-1/3 animate-pulse"></div>
              ) : careerdate?.createdAt ? (
                new Date(careerdate.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })
              ) : (
                "No date available"
              )}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <div className="mb-2">
                {loader
                  ? Array(6)
                      .fill(null)
                      .map((_, index) => (
                        <button
                          key={index}
                          className="bg-[#F6F6F6] w-[200px] h-[49px] font-[500] pt-3 pb-3 rounded-lg mr-2 mb-2 text-[14px] leading-[18.9px] pl-3 pr-3 animate-pulse"
                        ></button>
                      ))
                  : [
                      "Health Science",
                      "Information Technology",
                      "Business Management & Administration",
                      "Marketing",
                      "Manufacturing",
                    ].map((button, index) => (
                      <button
                        key={index}
                        className={`${
                          selectedButton === button
                            ? "bg-gradient-to-r from-[#061523] to-[#012C57] text-white"
                            : "bg-[#F6F6F6] text-[#474747]"
                        } h-[49px] font-[500] w-[auto] pt-3 pb-3 rounded-lg mr-2 mb-2 text-[14px] leading-[18.9px] pl-3 pr-3`}
                        onClick={() => handleCarrerData(button)}
                      >
                        {button}
                      </button>
                    ))}
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h3 className="text-[28px] font-[500] text-[#000000] py-2">
                  {loader ? (
                    <div className="h-6 bg-gray-300 w-1/4 animate-pulse rounded"></div>
                  ) : (
                    careerFiltered[0]?.career?.name || "No Data Found"
                  )}
                </h3>
                
              </div>
              <p className="text-[#00000080] font-[400] text-[14.92px]">
                {loader ? (
                  <div className=""></div>
                ) : (
                  careerFiltered[0]?.career?.description || "No Data Found"
                )}
              </p>
            </div>

            <hr className="h-px my-8 bg-gray-300 border-0" />

            <div className="bg-white rounded-lg">
              <div className="grid grid-cols-3 divide-x-[1px] gap-4 text-[#011225]">
                <ul className="pl-8 space-y-6 list-disc list-inside">
                  <h3 className="text-[20.51px] font-[500] text-[#000000]">
                    Sample Job Titles
                  </h3>
                  {loader ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                    </div>
                  ) : careerFiltered[0]?.career?.sample_job_titles?.length >
                    0 ? (
                    careerFiltered[0]?.career?.sample_job_titles?.map(
                      (item, index) => (
                        <li
                          className="font-[500] list-outside text-[16.78px] mx-3"
                          key={index}
                        >
                          {item}
                        </li>
                      )
                    )
                  ) : (
                    <p className="font-[500] list-outside text-[18px] text-gray-500">
                      No data found
                    </p>
                  )}
                </ul>

                <ul className="pl-8 space-y-6 list-disc list-inside">
                  <h3 className="text-[22px] font-medium text-[#011225]">
                    Career Pathways
                  </h3>
                  {loader ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                    </div>
                  ) : careerFiltered[0]?.career?.career_pathways?.length > 0 ? (
                    careerFiltered[0]?.career?.career_pathways.map(
                      (item, index) => (
                        <li
                          className="font-[500] list-outside text-[16.78px] mx-3"
                          key={index}
                        >
                          {item}
                        </li>
                      )
                    )
                  ) : (
                    <p className="font-[500] list-outside text-[18px] text-gray-500">
                      No data found
                    </p>
                  )}
                </ul>

                <ul className="pl-8 space-y-6 list-disc list-inside">
                  <h3 className="text-[22px] font-medium text-[#011225]">
                    Education & Training
                  </h3>
                  {loader ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                    </div>
                  ) : careerFiltered[0]?.career?.education_training?.length >
                    0 ? (
                    careerFiltered[0]?.career?.education_training.map(
                      (item, index) => (
                        <li
                          className="font-[500] list-outside text-[16.78px] mx-3"
                          key={index}
                        >
                          {item}
                        </li>
                      )
                    )
                  ) : (
                    <p className="font-[500] list-outside text-[18px] text-gray-500">
                      No data found
                    </p>
                  )}
                </ul>
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-300 border-0" />

            <div>
              <h3 className="text-[20.51px] font-[600] leading-[32.67px] text-[#011225]">
                Career Growth and Opportunities
              </h3>
              {loader ? (
                <div className="h-4 bg-gray-300 w-3/4 animate-pulse rounded"></div>
              ) : (
                <p className="text-[#00000080] font-[400] text-[16px]">
                  {careerFiltered[0]?.career?.career_growth_opportunities ||
                    "No data available"}
                </p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-[16.78px] font-[500] text-[#011225] mt-2">
              Explore More
            </h3>
            <a href={""} target="_blank" className="text-[#0E73D0] underline">
              www.healthscience.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
