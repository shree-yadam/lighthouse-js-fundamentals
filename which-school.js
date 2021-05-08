// Function to  help learners decide which school they should attend. 
const whichSchool = function(age) {
  if (age < 13) {   // if age is less than 13 the learner should attend elementary school
    return "Elementary School";
  } else if (age <= 18) {   // if age is between 13 and 18 uinclusive the learner should attend Secondary school
    return "Secondary School";
  } else {    //All other cases attend Lighthouse labs
    return "Lighthouse Labs";
  }
}

// Test Run

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));