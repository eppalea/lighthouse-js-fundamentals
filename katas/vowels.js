const numberOfVowels = function(data) {
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    data.charAt(i);
      if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      num += data[i];
    }
  }
  return num.length - 1;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));