import React from 'react';
import Circle from './Circle'; // Adjust the path if needed
import EducationExprience from './EducationExprience';

const About = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col'>
        {/* Title Section */}
        <div className='flex justify-center items-center mb-6'>
          <h3 className='text-5xl sm:text-4xl md:text-5xl font-black text-[#ff9f05] mt-14'>
            ABOUT <span className='text-gray-700'>ME</span>
          </h3>
        </div>

        {/* Personal Info Section */}
        <div className=' md:ml-16 mt-[50px] max-sm:mb-[60px]'>
          <h5 className=' ml-[100px] text-2xl max-sm:text-center max-sm:text-2xl max-sm:ml-0 md:text-4xl font-bold text-gray-700'>PERSONAL INFO</h5>
        </div>
        
        <section className=' sm:ml-8 md:ml-16 '>
          <div className='flex flex-col items-center justify-around md:flex-row md:gap-16'>
            {/* Left Column */}
            <div className='space-y-4 max-md:ml-[-55px]'>
              <ul>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>First Name: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>Rajnish</span>
                </li>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Last Name: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>Kumar</span>
                </li>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Age: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>21</span>
                </li>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Nationality: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>Indian</span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className='space-y-4'>
              <ul>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Address: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>Patna, Raja Bazar</span>
                </li>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Phone: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>+91 9316790225</span>
                </li>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Email: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>raj003se@gmail.com</span>
                </li>
                <li className='px-4 py-2 sm:px-5 sm:py-3'>
                  <span className='text-gray-700 font-medium text-base sm:text-lg'>Language: </span>
                  <span className='text-gray-700 font-bold text-base sm:text-xl'>Hindi, English</span>
                </li>
              </ul>
            </div>

            {/* Internship Box */}
            <div className='flex items-center pb-10 md:pb-14 mt-[100px]'>
              <div className='border-dashed border-4 border-[#ff9f05] px-5 py-5 sm:px-8 sm:py-8 md:px-14 md:py-14 max-w-full max-h-80'>
                <h3 className='font-bold text-4xl sm:text-5xl md:text-6xl text-[#ff9f05]'>
                  3<span className='text-xl sm:text-2xl md:text-3xl'>+</span>
                </h3>
                <p className='my-2 sm:my-3 ml-4 sm:ml-6 text-base sm:text-lg font-bold'>
                  MONTHS OF <br />INTERNSHIP
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download CV Button */}
        <div className='flex justify-center mt-6'>
          <button className='px-4 py-2 sm:px-6 sm:py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold transition-colors duration-300 ease-in-out hover:bg-[#ff9f05] hover:text-white'>
            <a target='blank' href="/public/documents/2_Rajnish_Resume.pdf">DOWNLOAD CV</a>
          </button>
        </div>

        {/* Divider */}
        <section>
          <div className='flex items-center justify-center'>
            <div className='w-full sm:w-8/12 h-[2px] bg-slate-500 mt-8'></div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className='flex items-center justify-center'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-700 my-8'>MY SKILLS</h3>
          </div>
        </section>

        <section>
          <div className='flex flex-col sm:flex-row flex-wrap justify-around items-center gap-6'>
            <div className='flex flex-col items-center'>
              <Circle percentage={60} />
              <p className='mt-4 text-xl font-bold text-gray-600'>HTML</p>
            </div>
            <div className='flex flex-col items-center'>
              <Circle percentage={70} />
              <p className='mt-4 text-xl font-bold text-gray-600'>CSS</p>
            </div>
            <div className='flex flex-col items-center'>
              <Circle percentage={80} />
              <p className='mt-4 text-xl font-bold text-gray-600'>JAVASCRIPT</p>
            </div>
            <div className='flex flex-col items-center'>
              <Circle percentage={50} />
              <p className='mt-4 text-xl font-bold text-gray-600'>JAVA</p>
            </div>
            <div className='flex flex-col items-center'>
              <Circle percentage={60} />
              <p className='mt-4 text-xl font-bold text-gray-600'>REACT</p>
            </div>
            <div className='flex flex-col items-center'>
              <Circle percentage={30} />
              <p className='mt-4 text-xl font-bold text-gray-600'>NODE JS</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <section>
          <div className='flex items-center justify-center'>
            <div className='w-full sm:w-8/12 h-[2px] bg-slate-500 mt-8'></div>
          </div>
        </section>

        {/* Education and Experience Section */}
        <section>
          <div>
            <EducationExprience />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
