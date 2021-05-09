/* Voting Station Calculator
Welcome to Codeville, a small but thriving town in Serverside, Canada. The town election is coming up, and citizens are excited to get to voting! The dutiful City of Codeville staff has finalized most of the details, except for one thing: where will citizens vote?

There are hundreds of buildings in town, but there are very specific requirements for what constitutes an acceptable voting station. With very little time to decide, the city needs our help to sort through the building data.

We'll write a chooseStations(stations) function that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.
*/

const chooseStations = function (votingStations) {
  let result = [];
  let count = 0;
  //loop for checking each station eligibility
  for (let votingStation of votingStations) {
    if (votingStation[1] >= 20 && (votingStation[2] === 'school' || votingStation[2] === 'community centre')) {
      result[count] = votingStation[0];
      count++;
    }
  }
  return result;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));