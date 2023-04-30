import React from "react";
import image4 from "../Image/download.png";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
const Box = () => {
  return (
    <>
      <div className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5 flex flex-row">
        <div>
          {" "}
          <img src={image4} alt="" className="h-28 w-28 m-5 rounded-lg" />
        </div>
        <div className="flex flex-col pl-28">
          <div className="pt-5 text-2xl font-medium">
            Wipro Software Engineer{" "}
          </div>
          <div className="pt-3 font-normal text-xl">About Wipro:</div>
          <div className="">
            Wipro Limited (formerly, Western India Palm Refined Oils Limited) is
            an Indian multinational corporation that provides information
            technology, consulting and business process services......
            <span className="text-[green]">Continue Reading</span>
          </div>
        </div>
      </div>

      <div className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5 flex flex-row">
        <div>
          {" "}
          <img src={image4} alt="" className="h-28 w-28 m-5 rounded-lg" />
        </div>
        <div className="flex flex-col pl-28">
          <div className="pt-5 text-2xl font-medium">
            Wipro Software Engineer{" "}
          </div>
          <div className="pt-3 font-normal text-xl">About Wipro:</div>
          <div className="">
            Wipro Limited (formerly, Western India Palm Refined Oils Limited) is
            an Indian multinational corporation that provides information
            technology, consulting and business process services......
            <span className="text-[green]">Continue Reading</span>
          </div>
        </div>
      </div>

      <div className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5 flex flex-row">
        <div>
          {" "}
          <img src={image4} alt="" className="h-28 w-28 m-5 rounded-lg" />
        </div>
        <div className="flex flex-col pl-28">
          <div className="pt-5 text-2xl font-medium">
            Wipro Software Engineer{" "}
          </div>
          <div className="pt-3 font-normal text-xl">About Wipro:</div>
          <div className="">
            Wipro Limited (formerly, Western India Palm Refined Oils Limited) is
            an Indian multinational corporation that provides information
            technology, consulting and business process services......
            <span className="text-[green]">Continue Reading</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-blue-700 font-medium m-20">
          <AddIcon sx={{ color: "blue" }} />
          Show More
        </div>
      </div>
      <div className=" ">
        <div className=" absolute   right-0   mt-8 bg-blue-800 rounded-full p-3  w-14 mr-10 " ><MessageIcon sx={{ color: "white" }} /></div>
      </div>
    </>
  );
};

export default Box;
