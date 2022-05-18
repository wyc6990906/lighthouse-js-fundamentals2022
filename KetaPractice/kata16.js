const makeCase = function (input, caseRule) {
  // camel
  if (caseRule === 'camel') {
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
  }
  // pascal
  if (caseRule === 'pascal') {
    let newStr = ''
    let array = input.split(" ")
    array.map((item, index) => {
      newStr += array[index].charAt(0).toUpperCase() + array[index].slice(1)
    })
    return newStr
  }
  // snake
  if (caseRule === 'snake') {
    let newStr = ''
    let array = input.split(" ")
    array.map((item, index) => {
      newStr += array[index] + '_'
    })
    newStr = newStr.slice(0, -1)
    return newStr
  }
  //kebab
  if (caseRule === 'kebab') {
    let newStr = ''
    let array = input.split(" ")
    array.map((item, index) => {
      newStr += array[index] + '-'
    })
    newStr = newStr.slice(0, -1)
    return newStr
  }
  //title
  if (caseRule === 'title') {
    let newStr = ''
    let array = input.split(" ")
    array.map((item, index) => {
      newStr += item.charAt(0).toUpperCase() + item.slice(1) + " "
    })
    return newStr
  }
  //vowel
  if (caseRule === 'vowel') {
    let newStr = ''
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        newStr += input[i].toUpperCase()
      } else {
        newStr += input[i]
      }
    }
    newStr.split(" ").join(" ")
    return newStr
  }
  //consonant
  if (caseRule === 'consonant') {
    let newStr = ''
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        newStr += input[i]
      } else {
        newStr += input[i].toUpperCase()
      }
    }
    newStr.split(" ").join(" ")
    return newStr
  }

}

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
