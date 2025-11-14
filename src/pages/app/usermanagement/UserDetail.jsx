import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { SearchIcon } from "../../../assets/export";
import GoalsCard from "../../../components/app/usermanagement/Goals";
import CarrersCards from "../../../components/app/usermanagement/CarrersCards";
import ResumeFile from "../../../components/app/usermanagement/ResumeFile";
import { getDateFormat, phoneFormater } from "../../../lib/helpers";
import { useUserDetails, useUsers } from "../../../hooks/api/Get";
import TransferableSkill from "../../../components/app/usermanagement/TransferableSkill";
import { TranfserableSkeleton } from "../../../components/global/Skeleton";
import SearchInput from "../../../components/global/SearchInput";

const UserDetail = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("All");
  const buttons = ["All", "Not Started yet", "In Progress", "Completed"];
  const tabs = ["Transferable Skills", "Goals", "Careers", "Resume"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [goalQuery, setGoalQuery] = useState("");
  const [carrerrQuery, setCarrerrQuery] = useState("");
  const [careerFiltered, setCareerFiltered] = useState("");
  const [resumeFiltered, setResumeFiltered] = useState("");
  const [resumeQuery, setResumeQuery] = useState("");
  const { state } = useLocation();
  const { user } = state || {};
  console.log(user);
  const { data: transferableSkill, loading: skillsLoader } = useUsers(
    `/api/admin/user-transferable-skills/${user?._id}`
  );
  const { data: goalData, loading: loader } = useUserDetails(
    `/api/admin/user-goals`,
    user?._id
  );
  const { data: resumeData, loading: resumeloader } = useUserDetails(
    `/api/admin/user-resumes`,
    user?._id
  );
  const { data: careerData, loading: careerloader } = useUserDetails(
    `/api/admin/user-career-recommendations`,
    user?._id
  );

  const handleGoalChange = (e) => {
    setGoalQuery(e.target.value);
  };
  const handleCareerChange = (e) => {
    setCarrerrQuery(e.target.value);
  };
  const handleResumeChange = (e) => {
    setResumeQuery(e.target.value);
  };

  const filteredGoals = goalData
    ?.filter((goal) =>
      selectedButton === "All" ? true : goal.status === selectedButton
    )
    ?.filter((goal) =>
      goal?.main_goal_name?.toLowerCase().includes(goalQuery.toLowerCase())
    );

  useEffect(() => {
    let filtered = careerData;

    if (carrerrQuery) {
      filtered = filtered.filter((recommendation) => {
        return recommendation.careers.some((carrer) => {
          const careerName = carrer.career.name.toLowerCase().trim();
          const query = carrerrQuery.toLowerCase().trim();

          return careerName.includes(query);
        });
      });
    }

    setCareerFiltered(filtered);
  }, [carrerrQuery, careerData]);

  useEffect(() => {
    let filtered = resumeData;

    if (resumeQuery) {
      filtered = filtered?.filter((item) => {
        const createdAt = new Date(item.createdAt);

        const formattedCreatedAt = createdAt.toISOString().split("T")[0];

        return formattedCreatedAt.includes(resumeQuery);
      });
    }

    setResumeFiltered(filtered);
  }, [resumeQuery, resumeData]);
  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack size={17} />
        <p className="text-[14px] font-[400] text-[#202224] ">Back</p>
      </div>
      <div className="flex  justify-between mt-3">
        <h2 className="text-[24px] font-[600] text-[#202224] ">
          Profile Detail
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[12px] p-5 mt-5 grid grid-cols-1 md:grid-cols-3 items-center gap-5 ">
        <div className="flex items-center gap-5 col-span-1">
          <img
            src={user?.profile_img || "https://placehold.co/400"}
            alt="Profile"
            className="w-[108px] h-[108px] rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-[32px] font-[600] text-[#0F0F0F]">
              {user?.name}
            </h2>
            <p className="text-gray-500 text-[16px] font-[500]">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="flex justify-start md:justify-center gap-40 col-span-2">
          <div>
            <p className="text-[#565656] text-[16px]">Phone Number</p>
            <p className="text-[16px] font-medium text-[#0F0F0F] text-nowrap">
              {user?.phone ? `+1 ${phoneFormater(user.phone)}` : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-[#565656] text-[16px]">Location</p>
            <p className="text-[16px] font-medium text-[#0F0F0F] text-nowrap">
              {user.city},{user.state}
            </p>
          </div>
          <div>
            <p className="text-[#565656] text-[16px] ">Subscription</p>
            <p className="text-[16px] font-medium text-[#0F0F0F] text-wrap">
              {user?.current_subscription_plan === "yearly_plan"
                ? "Yearly"
                : user?.current_subscription_plan === "3-month"
                ? "Quarterly"
                : user?.current_subscription_plan === "access-code"
                ? "Purchased Using Access Code"
                : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="bg-[#FFFFFF] rounded-[8px]  mb-2 w-[834px] ">
          <div className="mt-2 flex items-center px-2">
            {tabs.map((item) => (
              <div
                key={item}
                onClick={() => setActiveTab(item)}
                className={`p-5 w-[206px] text-center justify-center  cursor-pointer flex items-center ${
                  activeTab === item
                    ? "bg-grad-button rounded-[8px] h-[50px] text-white"
                    : "bg-transparent text-[#202224]"
                }`}
              >
                <p className="text-[18px] font-[500]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {activeTab === "Goals" && (
          <div>
            <SearchInput onChange={handleGoalChange} value={goalQuery} />
          </div>
        )}
        {activeTab === "Careers" && (
          <div>
            <SearchInput onChange={handleCareerChange} value={carrerrQuery} />
          </div>
        )}
        {activeTab === "Resume" && (
          <div>
            <SearchInput onChange={handleResumeChange} value={resumeQuery} />
          </div>
        )}
      </div>
      {activeTab == "Transferable Skills" && (
        <div className="bg-white p-2 rounded-[8px]">
          {skillsLoader ? (
            <TranfserableSkeleton />
          ) : transferableSkill ? (
            <TransferableSkill
              transferableSkill={transferableSkill}
              skillsLoader={skillsLoader}
            />
          ) : (
            <div className="text-center  h-[270px] flex justify-center items-center">
              No Transferable Skills Found
            </div>
          )}
        </div>
      )}

      {activeTab === "Goals" && (
        <div className="bg-white p-2 rounded-[8px]">
          {filteredGoals.length === 0 ? (
            <div className="text-center  h-[270px] flex justify-center items-center">
              No Goals Found
            </div>
          ) : (
            <>
              <div className="flex space-x-6 mb-6 bg-white p-1 rounded-md">
                {buttons.map((button) => (
                  <button
                    key={button}
                    className={`mx-2 pt-4 text-[16px] font-[#212121] ${
                      selectedButton === button
                        ? "border-b-2 border-b-black"
                        : "text-[#565656]"
                    } text-[14px] rounded-sm leading-[18.9px]`}
                    onClick={() => setSelectedButton(button)}
                  >
                    {button}
                  </button>
                ))}
              </div>

              <GoalsCard goalData={filteredGoals} loader={loader} />
            </>
          )}
        </div>
      )}

      {activeTab == "Careers" && (
        <div className="bg-white p-3 rounded-[8px]">
          {careerFiltered.length === 0 ? (
            <div className="text-center  h-[270px] flex justify-center items-center">
              No Careers Found
            </div>
          ) : (
            <CarrersCards
              careerData={careerFiltered}
              careerloader={careerloader}
            />
          )}
        </div>
      )}
      {activeTab == "Resume" && (
        <div className="bg-white p-3 rounded-[8px]">
          {resumeFiltered.length === 0 ? (
            <div className="text-center  h-[270px] flex justify-center items-center">
              No Resume Found
            </div>
          ) : (
            <ResumeFile
              resumeData={resumeFiltered}
              resumeloader={resumeloader}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
