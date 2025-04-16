import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";

const ResumeDetail = () => {
  const navigate = useNavigate();
  const phoneFormater = (input) => {
    if (!input) return "";
    const cleaned = input.replace(/\D/g, "");
    if (cleaned.length > 3 && cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else if (cleaned.length > 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
        10
      )}`;
    } else if (cleaned.length > 0) {
      return `(${cleaned}`;
    }
    return cleaned;
  };

  const phone = "+1 " + phoneFormater("1234567890");

  return (
    <div >
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
          User Resume
          </h3>
        </div>
      </div>
      <div className="bg-[#EFEFEF] p-4 rounded-[8px] ">
      <div className="bg-white  resumefonts mx-auto p-8 rounded-lg ">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[42.94px] font-[600]">John Doe</h1>
          <p className="mt-2 flex gap-4 justify-center text-[17.89px] text-[#000000] font-[500] ">
            <span>john.doe@example.com</span>
            <span>{phone}</span>
            <span className="cursor-pointer">
              <a href="https://maps.google.com" target="_blank">
                New York, NY
              </a>
            </span>
          </p>
        </div>

        {/* Objective */}
        <section className="mt-6">
          <h2 className="text-[20.59px] font-[700] uppercase ">Objective</h2>
          <p className="mt-2 text-[18.72px] font-[400] text-[#101010]">
            To obtain a position where I can maximize my skills and contribute
            to the organization’s success.
          </p>
        </section>
        <hr className="mt-6" />

        {/* Education */}
        <section className="mt-4">
          <h2 className="text-[22px] font-[700] text-[#101010] uppercase">
            Education
          </h2>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="font-[600] text-[22px]">Harvard University</p>
              <p className="text-[20px] font-[600]">2015 - 2019</p>
            </div>
            <li className="text-[#000000] pl-1 leading-[10.59px] font-[400] text-[20px] mt-5">
              Bachelor of Science in Computer Science
            </li>
          </div>
          <hr className="mt-5" />
        </section>

        {/* Certifications */}
        <section className="mt-6">
          <h2 className="text-[22px] font-[700] text-[#101010] uppercase">
            Certifications
          </h2>
          <div className="mt-4 flex justify-between">
            <li className="font-[500] text-[20.59px] text-[#101010]">
              AWS Certified Solutions Architect
            </li>
            <p className="text-[20px] font-[600]">2021</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-4">
          <hr className="mt-5" />
          <h2 className="text-[22px] font-[700] uppercase mt-4">Skills</h2>
          <div className="mt-4">
            <p className="text-[22px] font-[500] text-[#0F0F0F]">Soft Skills</p>
            <ul className="flex list-disc gap-10 ml-6 mt-4 mb-4">
              <li className="font-[400] text-[18px] text-[#0F0F0F]">
                Communication
              </li>
              <li className="font-[400] text-[18px] text-[#0F0F0F]">
                Teamwork
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-[22px] font-[500] text-[#0F0F0F]">
              Technical Skills
            </p>
            <ul className="flex list-disc gap-10 ml-6 mt-4 mb-4">
              <li className="font-[400] text-[18px] text-[#0F0F0F]">React</li>
              <li className="font-[400] text-[18px] text-[#0F0F0F]">Node.js</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <hr className="mt-4" />
          <h2 className="text-[20.59px] mt-4 font-[700] text-[#101010] uppercase">
            Work Experience
          </h2>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="font-[600] text-[#101010] text-[21.47px]">
                Tech Solutions Inc.
              </p>
              <p className="font-[600] text-[#101010] text-[20px]">
                2019 - 2023
              </p>
            </div>
            <p className="font-[500] text-[#0F0F0F] text-[20.59px] mt-1 mb-2">
              Frontend Developer
            </p>
            <ul className="list-disc ml-3 mt-2">
              <li className="text-[#000000] ml-2 font-[400] text-[18lix] ">
                Built and maintained modern web apps using React and Redux.
              </li>
            </ul>
          </div>
        </section>

        {/* Volunteer */}
        <section className="mt-6">
          <hr className="mt-5" />
          <h2 className="text-[20.59px] mt-4 font-[700] text-[#101010] uppercase">
            Volunteer Service
          </h2>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="font-[500] text-[#101010] text-[20.59px]">
                Local Tech Community
              </p>
              <p className="font-[600] text-[#101010] text-[20px]">
                2020 - 2022
              </p>
            </div>
            <ul className="list-outside list-disc">
              <li className="text-[#101010] mt-2 text-[18.72px] mx-4">
                Mentored junior developers and hosted community workshops.
              </li>
            </ul>
          </div>
        </section>

        {/* Honors */}
        <section className="mt-6">
          <hr className="mt-5" />
          <h2 className="text-[20.59px] mt-4 font-[700] text-[#101010] uppercase">
            Honors
          </h2>
          <div className="mt-1">
            <div className="flex justify-between items-center">
              <p className="font-[500] text-[#101010] text-[20.59px]">
                Employee of the Year
              </p>
              <p className="text-[20.59px] text-[#101010] font-[600]">2022</p>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
