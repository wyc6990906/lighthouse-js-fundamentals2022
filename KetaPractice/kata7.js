const checkAir = function (samples, threshold) {
  // Code here!
  let dirCount = 0
  const totalSamples = samples.length
  samples.map(item => {
    if (item === "dirty") {
      dirCount++
    }
  })
  if(dirCount / totalSamples < threshold){
    return 'Clean'
  } else {
    return 'Polluted'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
