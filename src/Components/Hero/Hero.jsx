import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbBadge } from "react-icons/tb";
import { FaLessThan } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-label">
        <div className="heart">
          <IoIosHeartEmpty />
          <span> AI-Powered Child Health Technology</span>
        </div>
      </div>

      <div className="hero-middle">
        <h1 className="gradient-text">Detecting Malnutrition</h1>
        <h3 className="gradient-text">Before It's Too Late</h3>
        <p>
          NutriScan harnesses the power of artificial intelligence to identify
          malnutrition in children through advanced image analysis and
          comprehensive health parameters.{" "}
          <span>Early detection saves lives.</span>
        </p>
      </div>

      <div className="hero-cta">
        
        <a href="#test">
        <button className="model" id="#test">
          Test Our Model <FaArrowRight />
        </button>
        </a>

        <button className="learn">
          Learn more <TbBadge />
        </button>
      </div>

      <div className="hero-cards">
        <div className="hero-card one">
          <h3>99.3%</h3>
          <p>Detection Accuracy</p>
        </div>

        <div className="hero-card two">
          <h3 className="less"> <FaLessThan className="than"/> 10s </h3>
          <p>Analysis Time</p>
        </div>

        <div className="hero-card three">
          <h3> 24/7 </h3>
          <p>Available Screening</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
