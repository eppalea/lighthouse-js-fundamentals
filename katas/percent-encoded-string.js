const urlEncode = function(text) {
  text = text.trim();
  let result = [];
  for (let i = 0; i < text.length; i++) {
    //console.log(text[i]);
      if (text[i] === " ")  {
      result += "%20";
    //console.log(result);
    } else {
      result += text[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));