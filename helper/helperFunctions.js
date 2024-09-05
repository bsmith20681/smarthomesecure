export const capitalize = (str) => {
  if (!str) return "";

  return str
    .split(" ") // Split the string into an array of words
    .map((word) => (word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : "")) // Capitalize each word
    .join(" "); // Join the words back into a single string
};
