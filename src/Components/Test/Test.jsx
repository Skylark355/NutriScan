import React, { useState } from "react";
import "./Test.css";
import brain from "../../assets/images/brain.png";
import upload from "../../assets/images/upload.png";

const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const validTypes = ["image/png", "image/jpeg"];
  //   if (!validTypes.includes(file.type)) {
  //     alert("Invalid file format. Please upload a PNG or JPEG image.");
  //     e.target.value = ""; // reset the input
  //     return;
  //   }

  //   if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
  //     setSelectedFile(file);
  //   }
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      alert("Invalid file format. Please upload a PNG or JPEG image.");
      e.target.value = ""; // reset the input
      return;
    }

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      alert("Please upload a PNG or JPG image");
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        "https://nutri-scan-model.up.railway.app/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // console.log("Prediction:", data);

      setPrediction(data);
      setLoading(false);
    } catch (error) {
      alert("Error uploading file:", error);
    }
  };

  return (
    <div className="test" id="test">
      <h1>
        Test Our <span>AI Model</span>
      </h1>
      <p>
        Experience the power of NutriScan's AI detection capabilities. Upload an
        image and provide health parameters to see how our model identifies
        potential malnutrition indicators.
      </p>

      <div className="form-container">
        {/* AI Analysis Input */}
        <div className="form-card">
          <h3>
            <img src={brain} alt="" className="brain" /> AI Analysis Input
          </h3>
          <h4>Upload Child's Photo</h4>

          <form onSubmit={handleSubmit}>
            <div className="upload-box">
              <label htmlFor="file-upload" className="upload-label">
                <div className="upload-icon">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <img src={upload} alt="Upload icon" />
                  )}
                </div>
                <p>
                  {previewImage
                    ? "Change image"
                    : "Click to upload or drag and drop"}
                </p>
                <input
                  type="file"
                  id="file-upload"
                  className="file-input"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Weight (kg)</label>
                <input type="number" placeholder="e.g. 10.5" />
              </div>

              <div className="form-group">
                <label>Height (cm)</label>
                <input type="number" placeholder="e.g. 85" />
              </div>

              <div className="form-group">
                <label>Mid Upper Arm Circumference (cm)</label>
                <input type="number" placeholder="e.g. 12.5" />
              </div>

              <div className="form-group">
                <label>Skin Type</label>
                <select>
                  <option value="">Select</option>
                  <option>Light</option>
                  <option>Medium</option>
                  <option>Dark</option>
                </select>
              </div>

              <div className="form-group">
                <label>Hair Type</label>
                <select>
                  <option value="">Select</option>
                  <option>Curly</option>
                  <option>Straight</option>
                  <option>Coily</option>
                </select>
              </div>

              <div className="form-group">
                <label>Assessment Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Oedema</label>
                <select>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Angular Stomatitis</label>
                <select>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Cheilosis</label>
                <select>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Bowels</label>
                <select>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="City, Country" />
              </div>

              <div className="form-group full-width">
                <label>Additional Notes (Optional)</label>
                <textarea placeholder="Any additional health information or observations..." />
              </div>

              <button className="analyze-btn" type="submit">
                <img src={brain} alt="" />
                {loading ? "Analyzing..." : "Analyze with AI"}
              </button>
            </div>
          </form>
        </div>

        {/* AI Results Placeholder */}
        {prediction && (
          <div className="result-card">
            <h3>Key parameters Detected</h3>
            <div className="result-body">
              <h3>
                Result from the scan is <span>{prediction.prediction}</span>
              </h3>
              {/* <h1>{prediction.prediction}</h1> */}
              <h3>
                The accuracy of this prediction is
                <span> {prediction.model_accuracy}</span>
              </h3>
              <h3>
                Estimated BMI <span>14.7</span>
              </h3>

              <div className="actions">
                <p className="title">Recommended Actions: </p>
                
                  <li className="all">
                    Immediate nutritional assessment recommended
                  </li>
                  <li className="all">Monitor weight gain over next 2 weeks</li>
                  <li  className="all">Consider supplemental feeding program</li>
                  <li className="all"> Schedule follow-up within 7 days</li>
             
              </div>
            </div>

            <div className="disclaimer">
              <span>
                <b>Disclaimer:</b> This prediction can make mistakes. Check important information..
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
