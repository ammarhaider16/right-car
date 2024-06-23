import OpenAI from "openai";
import OPENAI_APIKEY from "./API_KEY.js";
import { userContentGenerator } from "../utils/userContentGenerator.js";

const openai = new OpenAI({ apiKey: OPENAI_APIKEY });

export const getCarRecommendation = async (
  age,
  location,
  budget,
  purpose,
  fuelType,
  additionalInfo
) => {
  const systemContent =
    "You need to recommend the best car to the user. You will be provided with the user's information (age, location, budget) and preferences (purpose, fuel type, additional info). You need to return a json object with the following fields:\n'name' (the car's make and model), 'reason' (a short description of why the car is fit for the user), 'issues' (anything to look out for when buying the car). The 'issues' field should be shorter than the 'reason' field, and the 'reason' field should have at least 75 words. Make sure that you are not recommending the same car repeatedly.";

  const userContent = userContentGenerator(
    age,
    location,
    budget,
    purpose,
    fuelType,
    additionalInfo
  );

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemContent,
      },
      {
        role: "user",
        content: userContent,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
};
