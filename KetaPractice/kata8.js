const repeatNumbers = function (data) {
  const repeatedNums = [];
  data.forEach(item => {
    const repeatInArr = [];
    for (let i = 0; i < item[1]; i++) {
      repeatInArr.push(item[0]);
    }
    const repeat = repeatInArr.join('');
    repeatedNums.push(repeat);
  });
  return repeatedNums.join(', ');
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
