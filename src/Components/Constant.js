import brain from "../../src/assets/images/brain.png";
import camera from "../../src/assets/images/camera.png";
import globe from "../../src/assets/images/globe.png";
import statistic from "../../src/assets/images/statistic.png";
import time from "../../src/assets/images//time.png";
import user from "../../src/assets/images/user.png";

export const cards = [
  {
    id: 1,
    image: camera,
    title: "Image-Based Analysis",
    sub_text:
      "Advanced computer vision algorithms analyze facial features, body proportions, and visible health indicators to detect signs of malnutrition.",
  },

  {
    id: 2,
    image: statistic,
    title: "Multi-Parameter Assessment",
    sub_text:
      "Combines visual analysis with numerical health parameters including weight, height, BMI, and medical history for comprehensive evaluation.",
  },

  {
    id: 3,
    image: brain,
    title: "AI-Powered Intelligence",
    sub_text:
      "Machine learning models trained on thousands of cases provide accurate, consistent, and unbiased malnutrition detection.",
  },

  {
    id: 4,
    image: user,
    title: "Healthcare Integration",
    sub_text:
      "Seamlessly integrates with existing healthcare workflows and provides actionable insights for medical professionals.",
  },

  {
    id: 5,
    image: globe,
    title: "Global Accessibility",
    sub_text:
      "Designed to work in resource-limited settings with minimal infrastructure requirements, making it accessible worldwide.",
  },

  {
    id: 6,
    image: time,
    title: "Real-Time Results",
    sub_text:
      "Instant analysis and reporting enable immediate intervention and treatment planning for at-risk children.",
  },
];
