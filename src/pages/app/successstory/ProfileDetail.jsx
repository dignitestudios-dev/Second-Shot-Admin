import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Editicon, StoryProfile, Youtube } from "../../../assets/export";
import { RiDeleteBin6Line } from "react-icons/ri";
import StoryDelete from "../../../components/app/successstory/StoryDelete";
import EditStoryModal from "../../../components/app/successstory/EditStoryModal";
import { useNavigate } from "react-router";

const ProfileDetail = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const sections = [
    {
      title: "Current Profession",
      content: `Lorem ipsum dolor sit amet consectetur. Tortor mi imperdiet dictum
      mattis. Nisl dictum senectus non morbi. Lorem ipsum dolor sit amet
      consectetur. Enim ultricies in sed nisl nisl proin. Nulla euismod
      massa diam egestas tellus urna mattis aliquam sit. Condimentum
      viverra ut nunc auctor. Sit consectetur vitae vestibulum lacinia.
      Nunc nibh vel est tincidunt bibendum felis quisque nib. Nulla
      euismod massa diam egestas tellus urna mattis aliquam sit.`,
    },
    {
      title: "Education",
      content: `Lorem ipsum dolor sit amet consectetur. Tortor mi imperdiet dictum
      mattis. Nisl dictum senectus non morbi. Lorem ipsum dolor sit amet
      consectetur. Enim ultricies in sed nisl nisl proin. Nulla euismod
      massa diam egestas tellus urna mattis aliquam sit. Condimentum
      viverra ut nunc auctor. Sit consectetur vitae vestibulum lacinia.
      Nunc nibh vel est tincidunt bibendum felis quisque nib. Nulla
      euismod massa diam egestas tellus urna mattis aliquam sit.`,
    },
    {
      title: "Experience",
      content: `Lorem ipsum dolor sit amet consectetur. Tortor mi imperdiet dictum
      mattis. Nisl dictum senectus non morbi. Lorem ipsum dolor sit amet
      consectetur. Enim ultricies in sed nisl nisl proin. Nulla euismod
      massa diam egestas tellus urna mattis aliquam sit. Condimentum
      viverra ut nunc auctor. Sit consectetur vitae vestibulum lacinia.
      Nunc nibh vel est tincidunt bibendum felis quisque nib. Nulla
      euismod massa diam egestas tellus urna mattis aliquam sit.`,
    },
    {
      title:
        "Can you identify your most valuable transferable skill, and how have you seen it manifest in different areas of your life?",
      content: `Think about the skills you've developed that can be applied across different areas of life and work. Whether it's communication, problem-solving, or adaptability, these transferable skills are often the foundation of success. How has this skill shaped your interactions, improved your efficiency, or opened up new opportunities? Reflect on how it continues to influence both your personal and professional growth.`,
    },
    {
      title:
        "If you could give one piece of advice to your younger self, what would it be, and why?",
      content: `Reflecting on your journey, think about the wisdom and lessons you’ve gained over time. What insights would you share with your younger self to help navigate challenges, embrace opportunities, or avoid mistakes? Whether it’s about trusting your instincts, being patient, or taking more risks, this is a moment to look back and offer guidance that could have made a difference.`,
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-1" onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack size={17} />
        <p className="text-[14px] font-[400] text-[#202224] ">Back</p>
      </div>
      <div className="flex  justify-between mt-3">
        <h2 className="text-[24px] font-[600] text-[#202224] ">
          Profile Detail
        </h2>
        <div className="flex items-center gap-3">
          <img
            src={Editicon}
            className="w-[14.53px] cursor-pointer h-[14.53px]"
            alt=""
            onClick={() => setEditModal(true)}
          />
          <div onClick={() => setDeleteModal(true)} className="cursor-pointer">
            <RiDeleteBin6Line color="#FF5D5D" size={16} />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-[12px] p-5 mt-5 grid grid-cols-1 md:grid-cols-3 items-center gap-5 ">
        <div className="flex items-center gap-5 col-span-1">
          <img
            src={StoryProfile}
            alt="Profile"
            className="w-[108px] h-[108px] rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-[32px] font-[600] text-[#0F0F0F]">
              Olivia James
            </h2>
            <p className="text-gray-500 text-[16px] font-[500]">
              olivia.james@gmail.com
            </p>
          </div>
        </div>

        <div className="flex justify-start md:justify-center gap-20 col-span-1">
          <div>
            <p className="text-[#565656] text-[16px]">Profession</p>
            <p className="text-[16px] font-medium text-[#0F0F0F]">
              Marketing Manager
            </p>
          </div>
          <div>
            <p className="text-[#565656] text-[16px]">Location</p>
            <p className="text-[16px] font-medium text-[#0F0F0F]">
              Toronto, Canada
            </p>
          </div>
        </div>

        <div className="flex justify-end col-span-1">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] hover:bg-red-700 transition text-white px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <img src={Youtube} className="w-[23.8px] h-[17px] " alt="" />
            YouTube
          </a>
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-[8px] p-6 mt-3">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className={"text-[24px] font-[500] text-[#000000]"}>
              {section.title}
            </h2>
            <p className={"text-[16px] mt-3 font-[400] text-[#9A9A9A] "}>
              {section.content}
            </p>
            {index !== sections.length - 1 && <hr className="my-5" />}
          </div>
        ))}
      </div>

      <StoryDelete
        showModal={deleteModal}
        handleClose={() => setDeleteModal(false)}
      />
      <EditStoryModal
        showModal={editModal}
        handleClose={() => setEditModal(false)}
      />
    </div>
  );
};

export default ProfileDetail;
