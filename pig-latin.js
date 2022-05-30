function pigLatin() {
  let value
  for (let i = 2; i < process.argv.length; i++) {
    value = process.argv[i]
    console.log(value.slice(1) + value.slice(0, 1) + "ay");
  }
}

pigLatin()
