/* We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
 */

for (let x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 === 0 ) {  // If divisible by 3 and 4 then print LoopyLighthouse
    console.log("LoopyLighthouse"); 
  } else if(x % 3 === 0) {    // If divisible by 3 then print Loopy
    console.log("Loopy");
  } else if (x % 4 === 0 ){   // If divisible by 4 then print Lighthouse
    console.log("Lighthouse");
  } else {    // All other cases print number
    console.log(x);
  }
}