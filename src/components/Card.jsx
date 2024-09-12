import { FaFileAlt, FaUser, FaCode } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

const Card = ({ title, project, client, language, preview_url, image }) => {
  return (
    <div className="max-w-md sm:max-w-md md:max-w-lg mx-auto p-4 bg-[#dde9f0] shadow-md rounded-lg mt-6">
      <h1 className="text-xl md:text-2xl font-semibold text-center text-[#ff9f05] mb-4">
        {title}
      </h1>

      {/* Project and Client Details */}
      <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
        <div className="flex items-center gap-1 text-[#666666]">
          <FaFileAlt size={15} color="#666666" />
          <span className="font-semibold text-[#666666]">Project:</span>{" "}
          {project}
        </div>
        <div className="flex items-center gap-1 text-[#666666]">
          <FaUser size={15} color="#666666" />
          <span className="font-semibold text-[#666666]">Client:</span> {client}
        </div>
      </div>

      {/* Languages and Preview Details */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 text-sm sm:text-base">
        <div className="flex items-center gap-1 text-[#666666]">
          <FaCode size={23} color="#666666" />
          <span className="font-semibold text-[#666666]">Languages:</span>{" "}
          {language}
        </div>
      </div>
      <div className="mt-2 sm:mt-0 flex items-center gap-1 mb-3">
        <MdPreview size={19} color="#666666" />
        <span className="font-semibold text-[#666666]">Preview:</span>
        <a href={preview_url} className="text-blue-400" target="blank">
          click here!
        </a>
      </div>

      {/* Image Section */}
      <div className="overflow-hidden rounded-lg">
        <a href={preview_url} target="blank">
        <img
          className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
          src={image}
          alt={title}
        />
        </a>
       
      </div>
    </div>
  );
};

export default Card;
