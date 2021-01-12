function lastIndexOf(array, value) {
  for (let i = array.length - 1 ; i >= 0; i--) { // loop thru array starting from the end
    if (array[i] === value) {  // if match is made
      return i;  //return the array's index location
    } else if (array.length === 0) {
      return -1;
    }
  }
  // If nothing matches in the array;
  // as the loop has ended without returning anything
  return -1;
}




console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3)
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);