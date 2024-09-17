const reverseString = function (text) {
  const textCharsArray = text.split("");

  let reversedText = "";
  for (let i = textCharsArray.length - 1; i >= 0; i--) {
    reversedText += textCharsArray[i];
  }
  return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
