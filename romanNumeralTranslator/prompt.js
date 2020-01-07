/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

// subtract if smaller numeral appears before a larger one.
// Smaller ones will most likely appear before larger ones.
// Convert RN to a number.

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  let result = 0;
  // Split input at each character
  let separate = romanNumeral.split(' ');
  // Iterate through split input
  for (let i = 0; i < separate.length; i++) {
    //   Save current letter and next letter into variables
    let smallerLetter = DIGIT_VALUE[separate[i]];
    let largerLetter = DIGIT_VALUE[separate[i+1]];
    // Return NULL if input is not a string.
    if (smallerLetter === undefined) {
      return `null`;
    } else {
      if (smallerLetter < largerLetter) {
        // Add current letter minus next letter to result var
        result += largerLetter - smallerLetter;
        // Double increment count to skip next letter
        i++;
      } else {
        result += smaller;
      }
    }
  }
};