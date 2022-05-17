const numberOfVowels = function (data) {
// Put your solution here

  var count = "";

  for (i = 0; i < data.length; i++) {

    if (data[i] === "a" || data[i] === "e"
      || data[i] === "i" || data[i] === "o"
      || data[i] === "u") {
      count += data.charAt(i);
    }
  }
  return count.length;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
