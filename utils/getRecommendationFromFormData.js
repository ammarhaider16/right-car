import { getCarRecommendation } from "../api/gptFunctions.js";

export const getRecommendationFromFormData = async (formData) => {
  const { age, location, budget, purpose, fuelType, additionalInfo } = formData;

  try {
    const recommendation = await getCarRecommendation(
      age,
      location,
      budget,
      purpose,
      fuelType,
      additionalInfo
    );
    console.log(recommendation);
    return recommendation;
  } catch (err) {
    return null;
  }
};
