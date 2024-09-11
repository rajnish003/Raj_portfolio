import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaDribbble } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData); // Handle form data (e.g., send to server)

    // Display a success toast
    toast.success("Your message has been sent successfully!");

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="px-20">
      <section>
        <div className="py-20">
          <h1 className="text-center text-5xl font-sans font-extrabold text-[#666666]">
            GET IN
            <span className="text-[#ff9f05] ml-2">TOUCH</span>{" "}
          </h1>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:w-1/2">
            <div>
              <h2 className="text-[#666666] text-4xl font-bold font-sans mb-4">
                DON'T BE SHY !
              </h2>
            </div>
            <p className="text-[#666666] text-lg">
              Feel free to get in touch with me. I am always open to discussing{" "}
              <br />
              new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>
            <div className="flex flex-row item-center mt-8">
              <div className="flex items-center justify-center">
                <IoMdMail size={40} color="#ff9f05" />
              </div>
              <div className="flex flex-col items-start mx-4">
                <span className="text-lg text-[#666666]">MAIL ME</span>
                <a
                  className="text-[#666666] text-lg font-bold"
                  href="https://mail.google.com/mail/u/0/#inbox"
                >
                  raj003se@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-row item-center mt-8">
              <div className="flex items-center justify-center">
                <FaPhoneSquare size={40} color="#ff9f05" />
              </div>
              <div className="flex flex-col items-start mx-4">
                <span className="text-lg text-[#666666]">CALL ME</span>
                <a className="text-[#666666] text-lg font-bold">
                  +91 9316790225
                </a>
              </div>
            </div>
            <div className="w-56 my-8">
              <ul className="flex item-center justify-around">
                <li className="text-[#666666] px-2 py-2 bg-[#eeeeee] hover:bg-[#ff9f05] hover:text-white rounded-full">
                  <a
                    href="https://www.linkedin.com/in/rajnish09/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </li>
                <li className="text-[#666666] px-2 py-2 bg-[#eeeeee] hover:bg-[#ff9f05] hover:text-white rounded-full">
                  <a
                    href="https://x.com/Rajnish__009"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX size={23} />
                  </a>
                </li>
                <li className="text-[#666666] px-2 py-2 bg-[#eeeeee] hover:bg-[#ff9f05] hover:text-white rounded-full">
                  <a href="#">
                    <IoLogoYoutube size={25} />
                  </a>
                </li>
                <li className="text-[#666666] px-2 py-2 bg-[#eeeeee] hover:bg-[#ff9f05] hover:text-white rounded-full">
                  <a href="#">
                    <FaDribbble size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mb-10 flex flex-col space-y-4 lg:w-1/2 lg:items-start">
            <form
              onSubmit={submitHandler}
              className="w-full max-w-lg space-y-4"
            >
              {/* Input Fields */}
              <div className="flex flex-col md:flex-row md:space-y-0 space-y-4 md:gap-4">
                <input
                  name="name"
                  onChange={changeHandler}
                  type="text"
                  value={formData.name}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-[#ff9f05] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f05] focus:border-[#ff9f05]"
                />
                <input
                  name="email"
                  onChange={changeHandler}
                  type="email"
                  value={formData.email}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-[#ff9f05] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f05] focus:border-[#ff9f05]"
                />
                <input
                  name="subject"
                  onChange={changeHandler}
                  value={formData.subject}
                  type="text"
                  placeholder="Your Subject"
                  className="w-full px-4 py-2 border border-[#ff9f05] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f05] focus:border-[#ff9f05]"
                />
              </div>

              {/* Textarea */}
              <textarea
                name="message"
                onChange={changeHandler}
                value={formData.message}
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-[#ff9f05] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f05] focus:border-[#ff9f05]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className=" w-full px-4 py-2 bg-[#ff9f05] text-white font-semibold rounded-md shadow-sm hover:bg-[#e8a436] focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer /> {/*add toast ToastContainer in at the last  */}
    </div>
  );
};

export default Contact;
