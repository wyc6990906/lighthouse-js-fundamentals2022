const conditionalSum = function (values, condition) {
  // Your code here
  let sum = 0;
  values.map(item => {
    if (condition === 'even') {
      if (item % 2 === 0) {
        sum = sum + item
        // console.log(sum)
      }
    } else {
      if (item % 2 !== 0) {
        sum += item
      }
    }
  })
  // console.log('sum====', sum)
  return sum
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
