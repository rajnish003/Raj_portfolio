import React from 'react';
import Card from './Card.jsx';

const Portfolio = ({ info }) => {
  return (
    <div className="px-4 mb-10">
      {/* Portfolio Title */}
      <section className="mt-14 text-5xl font-extrabold font-sans">
        <div>
          <h1 className="text-center text-[#ff9f05] max-sm:text-3xl">
            <span className="text-[#666666]">MY</span> PORTFOLIO
          </h1>
        </div>
      </section>

      {/* Projects Header */}
      <section>
        <div className="mt-14">
          <h2 className="text-center text-2xl sm:text-3xl font-sans font-bold text-[#666666]">
            PROJECTS
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-[3px] mb-2 bg-[#666666]"></div>
            <span className="text-2xl text-[#666666]">*</span>
            <div className="w-16 h-[3px] mb-2 bg-[#666666]"></div>
          </div>
        </div>
      </section>

      {/* Responsive Project Cards */}
      <section className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 mt-10">
        {info.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
