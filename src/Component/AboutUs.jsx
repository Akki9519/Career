import React from "react";
import image5 from "../Image/Teal Modern Company Logo.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const AboutUs = () => {
  return (
    <>
      <div className="bg-[#4a75e2]  h-24 w-screen flex flex-row">
        <img src={image5} alt="" className="rounded-3xl mt-2 ml-20 mb-2" />
        <div
          className="mt-9 text-2xl  font-medium hover:underline"
          style={{ marginLeft: "800px" }}
        >
          Home
        </div>
        <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          About Us{" "}
        </div>
        <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          Contact
        </div>
      </div>
      <div className="ml-10 mt-10 font-semibold text-4xl font-serif">
        ABOUT US
      </div>
      <hr className="m-5" />
      <div className="">
        <div className="text-2xl font-thin  pl-10 ">
          It's great to helping job seekers find the right opportunities to grow
          and develop their careers. As i mentioned, finding a job that aligns
          with one's interests and skill set can be a challenging task, but a
          platform like Fast Career that collects and presents all relevant
          information in one place can certainly make the process easier.
          <br />
          In addition to providing information about job openings and company
          cultures, it's important to also offer resources and tools that can
          help job seekers improve their job search skills. Another potential
          benefit of my platform is the ability to help organizations reach a
          wider pool of potential candidates who may not have otherwise heard of
          their job openings. This can be particularly valuable for smaller or
          lesser-known companies that may struggle to attract top talent.
          Overall, it sounds like Fast Career has the potential to be a valuable
          resource for both job seekers and employers alike. <br /> <br />{" "}
          <br />
        </div>

        <div className="bg-[blue] w-screen h-40 ">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-8">
            Copyright © 2022 Fast Careers - All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
