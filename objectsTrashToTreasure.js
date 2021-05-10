/* OBJECTS : TRASH TO TREASURE 

Welcome back to Codeville, where you are now the mayor! The people of Codeville want you to focus on Smart City upgrades. You've decided to begin by replacing all of the city's trash cans with smart cans: when citizens toss their rubbish into the smart can, it automatically sorts items into waste, recycling, and compost bins.

We need to complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted.

## CHALLENGE

Complete the logic in the function smartGarbage.

Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.
*/
let trashBins = {
  waste : 0,
  recycling : 0,
  compost : 0
};

const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash !== undefined && bins !== undefined) {
    switch (trash) {
    case 'waste' : bins.waste++;
      break;
    case 'recycling' : bins.recycling++;
      break;
    case 'compost' : bins.compost++;
      break;
    }
  }
  return bins;
}

trashBins = smartGarbage('recycling', trashBins);

console.log(trashBins);

