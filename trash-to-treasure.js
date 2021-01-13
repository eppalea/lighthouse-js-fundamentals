
const smartGarbage = function(trash, bin) {
  if (trash === 'recycling') {
    bin.recycling += 1;
  } else if (trash === 'waste') {
    bin.waste += 1;
  } else if (trash === 'compost') {
    bin.compost += 1;
  }
  return bin;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })); 