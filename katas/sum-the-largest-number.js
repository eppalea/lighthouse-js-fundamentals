const sumLargestNumbers = function(data) {
  let numOne = 0;
  let numTwo = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > numOne) {
      numOne = data[i];
      //console.log(numOne)
    }
    for (let j = 0; j < data.length; j++) {
      if (data[j] < numOne && data[j] > numTwo) {
        numTwo = data[j];
        //console.log(numTwo);
      }
    }
  }
  let largestNumbers = numOne + numTwo;
  return largestNumbers;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));