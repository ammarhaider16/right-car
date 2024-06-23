export const userContentGenerator = (
  age,
  location,
  budget,
  purpose,
  fuelType,
  additionalInfo
) => {
  let resultParts = [];

  if (age !== null && age !== "") {
    resultParts.push(`age: ${age}`);
  }
  if (location !== null && location !== "") {
    resultParts.push(`location: ${location}`);
  }
  if (budget !== null && budget !== "") {
    resultParts.push(`budget: USD ${budget}`);
  }
  if (purpose !== null && purpose !== "") {
    resultParts.push(`purpose: ${purpose}`);
  }
  if (fuelType !== null && fuelType !== "") {
    resultParts.push(`fuelType: ${fuelType}`);
  }
  if (additionalInfo !== null && additionalInfo !== "") {
    resultParts.push(`additionalInfo: ${additionalInfo}`);
  }

  return resultParts.join("\n");
};
