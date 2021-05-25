/* We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
 */

//Function to take in range of numbers to be printed(startLimit & endLimit) along with print Strings for 2 factors to check and print in place of numbers
const printLoopyLighthouse = function(startLimit, endLimit, printStr1, factor1, printStr2, factor2) {
  for (let x = startLimit; x <= endLimit; x++) {
    let output = "";
    
    if (x % factor1 === 0) {
      output += printStr1;
    }

    if (x % factor2 === 0) {
      output += printStr2;
    }

    console.log((output === "") ? x : output);
  }
};

printLoopyLighthouse(100, 200, "Loopy", 3, "Lighthouse", 4);

