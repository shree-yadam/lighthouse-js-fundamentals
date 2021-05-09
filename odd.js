/*  ODD CHECKER
Canada Post is making an effort to ensure the safety of their postal workers. They are implementing a new tactic to reduce how many times a postal worker has to cross a road. They will be sorting all undelivered mail into two piles, mail going to even numbered addresses, and mail going to odd numbered addresses. Then one worker can deliver even mail, while another delivers odd mail, meaning they never have to cross the road.

We have been hired to write a function that can help with the mail sorting. In this challenge, we will be writing a function to check whether a number is odd or not.
*/

function isOdd (num) {
  return num % 2 !==0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));