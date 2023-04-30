import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import Carousel from "./Carousel";
import About from './About'
import Message from "./Message";
import Box from "./Box";

const Home = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Navbar />
          <Footer />
        </div>
        <div className="flex flex-col">
          <Carousel />
          <About />
          <Box />
        </div>
      </div>
      <Message />
    </div>
  );
};

export default Home;
