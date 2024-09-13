import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate=useNavigate();

  function clickHandler(){
    navigate("/About")
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:justify-between items-center min-h-screen p-4">
      {/* Image Section */}
      <div className="flex justify-center items-center mb-8 lg:mb-0 lg:ml-8 pb-10">
        <img
          className="rounded-3xl"
          src="/img/profile-pic.png"
          alt="image"
          width={420}
          height={700}
        />
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:ml-8">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ff9f05]">
          I'M RAJNISH.
        </h3>
        <h6 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mt-4 sm:mt-6 font-bold">
          WEB DEVELOPER
        </h6>
        <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mt-6 sm:mt-8 text-gray-700">
          Hi, I'm Rajnish Kumar, a Web Developer specializing in building
          responsive, user-friendly websites. With expertise in JavaScript,
          React, HTML, and CSS, I create clean, efficient code to deliver fast,
          optimized web experiences. From front-end design to back-end
          integration, I bring ideas to life through modern web technologies.
          Check out my portfolio to see my work!
        </p>

       
          <button onClick={clickHandler} className="px-4 py-2 border-2 border-[#ff9f05] text-gray-600 rounded-full shadow-md hover:bg-[#ff9f05] hover:text-gray-700 font-bold transition duration-300 w-full sm:w-auto mt-6">
            MORE ABOUT ME
          </button>
      </div>
    </div>
  );
};

export default Home;