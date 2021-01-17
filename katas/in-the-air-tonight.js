const checkAir = function (samples, threshold) {
  let cleanSamples = 0;
  let dirtySamples = 0;
  //let totalSampleCount = samples.length 
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'clean') {
      cleanSamples += 1;
    } else if (samples[i] === 'dirty') {
      dirtySamples += 1;
      //console.log(cleanSamples);
      //console.log(dirtySamples);  
    }
  }
  let totalSampleCount = cleanSamples + dirtySamples;
    //console.log(totalSampleCount);
  if (threshold <= dirtySamples/totalSampleCount) {
    return 'Polluted';
  } else {
    return 'Clean'; 
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
