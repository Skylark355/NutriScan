import { FaEnvelope, FaGlobe, FaShieldAlt, FaHeart } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column brand">
          <div className="footer-logo">
            <FaHeart className="logo-icon" />
            <span className="logo-text">NutriScan</span>
          </div>
          <p className="description">
            Empowering healthcare workers worldwide with AI-powered malnutrition detection to save children's lives through early intervention.
          </p>
          <div className="footer-icons">
            <div className="icon"><FaEnvelope /></div>
            <div className="icon"><FaGlobe /></div>
            <div className="icon"><FaShieldAlt /></div>
          </div>
        </div>

        <div className="footer-column middle">
          <h4>Platform</h4>
          <ul>
            <li>AI Model</li>
            <li>Data Collection</li>
            <li>Visualization</li>
            <li>Integration</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Research</li>
            <li>Documentation</li>
            <li>Training</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 NutriScan. Built with <FaHeart className="heart-icon" /> for child health worldwide.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
