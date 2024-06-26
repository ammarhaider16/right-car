import { useState } from "react";
import { FormComponent } from "../components/FormComponent.js";
import { getRecommendationFromFormData } from "../utils/getRecommendationFromFormData.js";
import Link from "next/link.js";

export const Generate = () => {
  // Generator State Hooks
  const [showForm, setShowForm] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Form State Hooks
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [purpose, setPurpose] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  // Result Hooks
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [issues, setIssues] = useState("");

  const updateStatesToDefault = () => {
    setName("");
    setReason("");
    setIssues("");

    setAge("");
    setLocation("");
    setBudget("");
    setPurpose("");
    setFuelType("");
    setAdditionalInfo("");

    setShowLoading(false);
    setShowResult(false);
    setShowErrorMessage(false);
    setShowForm(true);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handleFormSubmission = async () => {
    const formData = {
      age,
      location,
      budget,
      purpose,
      fuelType,
      additionalInfo,
    };
    setShowForm(false);
    setShowLoading(true);
    const stringRecommendation = await getRecommendationFromFormData(formData);

    if (stringRecommendation == null) {
      setShowLoading(false);
      setShowErrorMessage(true);
      return;
    }

    try {
      const recommendation = JSON.parse(stringRecommendation);
      if (
        recommendation["name"] != null &&
        recommendation["reason"] != null &&
        recommendation["issues"] != null
      ) {

        // Update results data
        setName(recommendation["name"]);
        setReason(recommendation["reason"]);
        setIssues(recommendation["issues"]);

        // Update generator state
        setShowLoading(false);
        setShowResult(true);
      } else {
        setShowLoading(false);
        setShowErrorMessage(true);
      }
    } catch (error) {
      setShowLoading(false);
      setShowErrorMessage(true);
      return;
    }
  };

  // Need to do error handling (in case either recommendation or any recommendation.data is null)

  return (
    <div
      style={{
        minHeight: "150vh",
        backgroundImage: `url("/body-background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        className="intro-container-textbox"
        style={{ justifyContent: "flex-end" }}></div>

      {showForm && (
        <>
          <div
            className="form-container"
            style={{ transform: "translateY(50px)" }}>
            <div>
              <p style={{ fontSize: "3.5vh", fontWeight: "bold" }}>
                a few details first
              </p>
              <p style={{ color: "#FFFFF0" }}>
                it takes less than 2 minutes to make the right choice
              </p>
            </div>

            <FormComponent
              id="age"
              labelText="how old are you?"
              placeholder="age"
              value={age}
              handleChange={handleAgeChange}
            />

            <FormComponent
              id="location"
              labelText="what state are you from?"
              placeholder="location"
              value={location}
              handleChange={handleLocationChange}
            />

            <FormComponent
              id="budget"
              labelText="what sort of budget are we looking at?"
              placeholder="USD amount"
              value={budget}
              handleChange={handleBudgetChange}
            />

            <FormComponent
              id="fuelType"
              labelText="petrol, diesel, hybrid, or electric?"
              placeholder="fuel type"
              value={fuelType}
              handleChange={handleFuelTypeChange}
            />

            <FormComponent
              id="purpose"
              labelText="tell us a bit about how you plan to use the car"
              placeholder="daily commute, road trips, off-roading etc."
              value={purpose}
              handleChange={handlePurposeChange}
            />

            <FormComponent
              id="additionalInfo"
              labelText="anything else you want to consider?"
              placeholder="feel free to enter additional info"
              value={additionalInfo}
              handleChange={handleAdditionalInfoChange}
            />

            <button
              className="button"
              style={{ marginTop: "20px", fontFamily: "Poppins" }}
              onClick={handleFormSubmission}>
              find
            </button>
          </div>
        </>
      )}

      {showLoading && (
        <>
          <div
            className="form-container"
            style={{
              transform: "translateY(50px)",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div>
              <p
                style={{ fontSize: "3.5vh", fontWeight: "bold" }}
                className="loading-text">
                finding the Right Car for you
              </p>
              <p style={{ color: "#FFFFF0", marginTop: "3vh" }}>
                just a moment...
              </p>
            </div>
          </div>
        </>
      )}

      {showResult && (
        <>
          <div
            className="form-container"
            style={{
              transform: "translateY(50px)",
              minHeight: "50vh",
              textAlign: "left",
            }}>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "5vh",
                  fontWeight: "bold",
                  marginTop: "3vh",
                }}>
                ... and the results are here!
              </p>
            </div>

            <p
              style={{
                fontSize: "3.5vh",
                fontWeight: "bold",
                marginTop: "2.5vh",
              }}>
              the Right Car for you is..
            </p>
            <p className="result-description-text">The {name}</p>

            <p
              style={{
                fontSize: "3.5vh",
                fontWeight: "bold",
                marginTop: "2.5vh",
              }}>
              here is why we think you will like it..
            </p>
            <p className="result-description-text">{reason}</p>

            <p
              style={{
                fontSize: "3.5vh",
                fontWeight: "bold",
                marginTop: "2.5vh",
              }}>
              some things to look out for...
            </p>
            <p className="result-description-text">{issues}</p>

            <div style={{ textAlign: "center" }}>
              <button
                className="button"
                style={{ marginTop: "2.5vh", fontFamily: "Poppins" }}
                onClick={updateStatesToDefault}>
                want to try again?
              </button>
            </div>
          </div>
        </>
      )}

      {showErrorMessage && (
        <>
          <div
            className="form-container"
            style={{
              transform: "translateY(50px)",
              height: "50vh",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <p
              style={{
                fontSize: "3.5vh",
                fontWeight: "bold",
                marginTop: "3vh",
              }}>
              oops! something is not right
            </p>
            <p style={{ color: "#FFFFF0", marginTop: "3vh" }}>
              please check your details again, and contact us if the issue
              persists!
            </p>
            <button
              className="button"
              style={{ marginTop: "5vh", fontFamily: "Poppins" }}
              onClick={updateStatesToDefault}>
              retry
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Generate;
