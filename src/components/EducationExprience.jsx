import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationExprience = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-700 text-center mb-10">
          EDUCATION & EXPERIENCE
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Left Column */}
        <ul className="flex flex-col space-y-4 lg:w-1/2">
          <li className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#ff9f05] flex items-center justify-center rounded-full">
                <FaGraduationCap size={25} color="white" />
              </div>
              <div className="bg-gray-400 w-[2px] h-28"></div>
            </div>
            <div className="space-y-2">
              <span className="bg-[#dbdbdb] px-2 py-1 text-sm text-[#444242] rounded-full mb-2">
                2023-PRESENT
              </span>
              <h4 className="text-[#666666] font-bold text-xl">
                MASTER IN COMPUTER APPLICATION
                <span className="text-lg font-semibold"> - AMITY UNIVERSITY,PATNA</span>
              </h4>
              <p className="text-[#666666]">
              Currently pursuing MCA, focusing on software development, data management, and emerging technologies like AI and cybersecurity
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#ff9f05] flex items-center justify-center rounded-full">
                <FaGraduationCap size={25} color="white" />
              </div>
              <div className="bg-gray-400 w-[2px] h-28"></div>
            </div>
            <div className="space-y-2">
              <span className="bg-[#dbdbdb] px-2 py-1 text-sm text-[#444242] rounded-full mb-2">
                2020-2023
              </span>
              <h4 className="text-[#666666] font-bold text-xl">
              BACHELOR IN COMPUTER APPLICATION
                <span className="text-lg font-semibold"> - ARCADE BUSINESS COLLEGE,PATNA</span>
              </h4>
              <p className="text-[#666666]">
              Completed BCA, with a focus on software development, database management, and programming languages, building a strong foundation in computer science and IT.
              </p>
            </div>
          </li>
          {/* Repeat the <li> block as needed */}
        </ul>

        {/* Right Column */}
        <ul className="flex flex-col space-y-4 lg:w-1/2 lg:items-end my-5">
          <li className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#ff9f05] flex items-center justify-center rounded-full">
                <FaGraduationCap size={25} color="white" />
              </div>
              <div className="bg-gray-400 w-[2px] h-28"></div>
            </div>
            <div className="space-y-2 my-5">
              <span className="bg-[#dbdbdb] px-2 py-1 text-sm text-[#444242] rounded-full mb-2 mt-2">
                June 2024- SEPT 2024
              </span>
              <h4 className="text-[#666666] font-bold text-xl">
                INTERNSHIP
                <span className="text-lg font-semibold"> - CODEBUCKET SOLUTIONS PVT. LTD</span>
              </h4>
              <p className="text-[#666666]">
              Completed a 3-month internship at CODEBUCKET SOLUTIONS PVT. LTD, gaining hands-on experience in software development, coding, and project collaboration on real-world projects.
              </p>
            </div>
          </li>
          {/* Repeat the <li> block as needed */}
        </ul>
      </div>
    </div>
  );
};

export default EducationExprience;
