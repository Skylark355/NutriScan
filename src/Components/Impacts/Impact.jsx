import React from "react";
import "./Impact.css";
import { FaUserFriends, FaHeart, FaChartLine, FaGlobe } from "react-icons/fa";

const Impact = () => {
  return (
    <div className="impact">
      <h1>Making a Global Impact</h1>
      <p>
        NutriScan is transforming child healthcare worldwide by enabling early
        detection and intervention for malnutrition, helping save countless
        young lives.
      </p>

      <div className="impact-cards">
        <div className="impact-card">
          <FaUserFriends className="impact-icon" />
          <h2>2M+</h2>
          <h4>Children Screened</h4>
          <p>Across 15 countries worldwide</p>
        </div>

        <div className="impact-card">
          <FaHeart className="impact-icon" />
          <h2>89%</h2>
          <h4>Early Detection Rate</h4>
          <p>Identifying cases before severe malnutrition</p>
        </div>

        <div className="impact-card">
          <FaChartLine className="impact-icon" />
          <h2>67%</h2>
          <h4>Faster Diagnosis</h4>
          <p>Compared to traditional methods</p>
        </div>

        <div className="impact-card">
          <FaGlobe className="impact-icon" />
          <h2>45</h2>
          <h4>Healthcare Partners</h4>
          <p>Hospitals and clinics using NutriScan</p>
        </div>
      </div>

      <div className="join-section">
        <div className="join-container">
          {/* Left Content */}
          <div className="join-text">
            <h2>Join the Fight Against Child Malnutrition</h2>
            <p>
              Every child deserves proper nutrition and a healthy start in life.
              NutriScan empowers healthcare workers, NGOs, and communities to
              identify and address malnutrition before it becomes
              life-threatening.
            </p>

            <ul>
              <li>Accessible technology for resource-limited settings</li>
              <li>Training and support for healthcare workers</li>
              <li>Integration with existing health systems</li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="join-card">
            <FaHeart className="join-icon" />
            <h3>Together We Can</h3>
            <p>Save Lives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
