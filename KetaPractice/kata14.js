const currencyArray = [
  ["twentyDollars", 2000],
  ["tenDollars", 1000],
  ["fiveDollars", 500],
  ["twoDollars", 200],
  ["oneDollars", 100],
  ["quarter", 25],
  ["dime", 10],
  ["nickel", 5],
  ["penny", 1],
];
const calculateChange = function (total, cash) {
  const returnedObject = {};
  let gap = cash - total;

  for (const [denomination, value] of currencyArray) {
    const numOfDenomination = gap / value;
    if (numOfDenomination > 1) {
      returnedObject[denomination] = Math.floor(numOfDenomination);
    }
    gap = gap % value;
  }

  return returnedObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
