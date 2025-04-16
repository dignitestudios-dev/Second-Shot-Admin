import React from "react";
import { useNavigate } from "react-router";

const AllResume = () => {
    const navigate =useNavigate()
  const phoneFormater = (input) => {
    if (!input) return "";
    const cleaned = input.replace(/\D/g, "");
    if (cleaned.length > 3 && cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else if (cleaned.length > 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length > 0) {
      return `(${cleaned}`;
    }
    return cleaned;
  };

  return (
    <div onClick={()=>navigate('/app/resume-detail')}>
      <div className="bg-white h-[280px] resumefonts overflow-x-auto overflow-hidden p-2 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-[8.88px] font-[600]">John Doe</h1>
          <p className="mt-1 flex gap-4 justify-center text-[5.12px] text-[#000000] font-[500]">
            <span>john.doe@example.com</span>
            <span>+1 {phoneFormater("1234567890")}</span>
          </p>
        </div>

        {/* Objective */}
        <section className="mt-2">
          <h2 className="text-[5px] font-[700] uppercase">Objective</h2>
          <p className="mt-1 text-[5px] font-[400] text-[#101010]">
            Seeking a challenging position in software development where I can contribute to team success and grow professionally.
          </p>
        </section>

        {/* Education */}
        <section className="mt-1">
          <hr className="mt-1" />
          <h2 className="text-[5px] leading-[9.7px] font-[700] text-[#101010] uppercase">
            Education
          </h2>
          <div className="mt-1">
            <div className="flex items-center justify-between">
              <p className="font-[600] text-[5px]">XYZ University</p>
              <p className="text-[3.94px] text-[#101010] font-[600]">2016 - 2020</p>
            </div>
            <li className="text-[#000000] pl-1 leading-[10.59px] font-[400] text-[5px]">B.Sc. Computer Science</li>
          </div>
          <hr className="mt-1" />
        </section>

        {/* Certifications */}
        <section className="mt-1">
          <h2 className="text-[5px] leading-[9.7px] font-[700] text-[#101010] uppercase">
            Certifications
          </h2>
          <div className="mt-1">
            <div className="flex items-center justify-between">
              <li className="font-[600] text-[5px]">Full Stack Web Developer</li>
              <p className="text-[3.94px] text-[#101010] font-[600]">2021-01-15 - Present</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-1">
          <hr className="mt-1" />
          <h2 className="text-[5px] mt-2 font-[700]">Skills</h2>

          <div className="mt-1">
            <p className="text-[5px] font-[500] text-[#0F0F0F]">Soft Skills</p>
            <ul className="flex list-disc flex-wrap gap-2 ml-3 text-wrap">
              <li className="font-[400] text-[5px] text-[#0F0F0F]">Communication</li>
              <li className="font-[400] text-[5px] text-[#0F0F0F]">Teamwork</li>
            </ul>
          </div>

          <div className="mt-1">
            <p className="text-[5px] font-[500] text-[#0F0F0F]">Technical Skills</p>
            <ul className="flex list-disc flex-wrap gap-2 ml-3 mt-1 text-wrap">
              <li className="font-[400] text-[5px] text-[#0F0F0F] leading-[16px]">React</li>
              <li className="font-[400] text-[5px] text-[#0F0F0F] leading-[16px]">Node.js</li>
              <li className="font-[400] text-[5px] text-[#0F0F0F] leading-[16px]">MongoDB</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-2">
          <hr className="mt-1" />
          <h2 className="text-[5px] mt-2 font-[700] text-[#101010] uppercase">
            Work Experience
          </h2>
          <div className="mt-1">
            <div className="flex justify-between items-center">
              <p className="font-[600] leading-[0.97px] text-[#101010] text-[5.94px]">Tech Corp</p>
              <p className="font-[600] leading-[5.94px] text-[#101010] text-[3.94px]">2020-06-01 - 2023-12-31</p>
            </div>
            <p className="font-[500] text-[#0F0F0F] leading-[8.7px] text-[5px]">Frontend Developer</p>
            <ul className="list-disc ml-3 mt-1">
              <li className="text-[#000000] text-[5px] font-[400] leading-[6.59px]">Developed and maintained React-based web apps.</li>
            </ul>
            <hr className="mt-1" />
          </div>
        </section>

        {/* Volunteer */}
        <section className="mt-1">
          <h2 className="text-[5px] font-[700] leading-[6.7px] text-[#101010] uppercase">
            Volunteer Service
          </h2>
          <div className="">
            <div className="flex justify-between items-center">
              <p className="font-[500] text-[#101010] text-[5px] leading-[10.7px]">Open Source Community</p>
              <p className="text-[3.9px] text-[#101010]">2022 - Present</p>
            </div>
            <ul className="list-outside list-disc">
              <li className="text-gray-700 mt-1 ml-3 text-[4px]">Contributed to open source documentation and bug fixes.</li>
            </ul>
          </div>
        </section>

        {/* Honors */}
        <section className="mt-2">
          <hr className="mt-1" />
          <h2 className="text-[5px] mt-2 font-[700] leading-[1.7px] text-[#101010] uppercase">
            Honors
          </h2>
          <div className="mt-1">
            <div className="flex items-center justify-between">
              <p className="font-[500] text-[#101010] text-[5px] leading-[1.7px]">Employee of the Month</p>
              <p className="text-[3px] font-[500] text-[#101010] leading-[4.7px]">2023-03-01</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllResume;
