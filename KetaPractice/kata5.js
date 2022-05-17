const urlEncode = function (text) {
  let newString = "";
  let trimString = text.trim();

  for (let i = 0; i < trimString.length; i++) {
    if (trimString[i] === " ") {
      newString += "%20";
    } else {
      newString += trimString[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
