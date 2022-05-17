const camelCase = function (input) {
  let newStr = ''
  let array = input.split(" ")
  array.map((item, index) => {
    if (index !== 0) {
      newStr += array[index].charAt(0).toUpperCase() + array[index].slice(1)
    } else {
      newStr += array[index]
    }
  })
  return newStr
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
