import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";
import { getDateFormat } from "../../../lib/helpers";
import { CarrerSkeleton } from "../../global/Skeleton";

const CarrersCards = ({ careerData, careerloader }) => {
  const navigate = useNavigate();
  const recommendation = {
    recommendationId: "1",
    is_favorite: false,
    createdAt: "2025-04-10T10:00:00Z",
    careers: [
      { career: { id: "1", name: "Software Engineer" } },
      { career: { id: "2", name: "Data Scientist" } },
      { career: { id: "3", name: "Product Manager" } },
      { career: { id: "4", name: "Product Manager" } },
    ],
  };

  const loader = {
    1: false,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {careerloader ? (
        <CarrerSkeleton />
      ) : (
        careerData?.map((recommendation, recommendationIndex) => (
          <div
            key={recommendationIndex}
            className="group relative rounded-[24px] h-auto p-4 bg-[#F6F8FF] text-black shadow-lg cursor-pointer hover:bg-gradient-to-l from-[#012C57] to-[#061523] hover:text-white transition duration-200"
          >
            {" "}
            <div className="flex flex-col text-left mb-4">
              <span className="text-[24px] font-[500] leading-[32.4px] group-hover:text-white transition duration-200">
                Career
              </span>
              <span className="text-[24px] font-[500] leading-[32.4px] group-hover:text-white transition duration-200">
                Recommendations
              </span>
            </div>
            <div className="space-y-2 mb-6 text-left">
              {recommendation?.careers?.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center text-start px-3 py-1 text-[14px] font-[400] leading-[18.9px] rounded-[10px] bg-transparent border border-gray-400 text-[#000000] group-hover:border-white group-hover:text-white transition duration-200 mr-2 align-middle"
                  style={{ height: "45px" }}
                >
                  {item?.career?.name}
                </div>
              ))}
            </div>
            <div className="text-sm flex justify-between items-center group-hover:text-white">
              <span className="text-[16px] font-[500] leading-[21.6px]">
                {getDateFormat(recommendation?.createdAt)}
              </span>
              <button
                className="p-2 rounded-[8px] flex items-center justify-center bg-[#012C57] w-[43px] h-[43px] text-center text-white group-hover:bg-white group-hover:text-[#012C57] transition duration-200"
                onClick={() =>
                  navigate(`/app/carrer-detail/${recommendation?.recommendationId}`)
                }
              >
                <IoIosArrowForward size={"16px"} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CarrersCards;
