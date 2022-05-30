const args = process.argv;

function reverse(item) {
  let result = ''
  if (typeof item === 'number') {
    return item
  } else {
    for (let i = item.length - 1; i >= 0; i--) {
      // console.log(item[i])
      result += item[i]
    }
  }
  return result
}

console.log(reverse(args[2]),reverse(args[3]))

// console.log(args[2], args[3])
