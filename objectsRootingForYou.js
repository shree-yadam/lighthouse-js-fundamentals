/* OBJECTS ROOTUNG FOR YOU 

At this year's town festival the Codeville Vegetation Association will be handing out several awards for the best vegetables in a given category. We'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness OR their plumpness.

## CHALLENGE

Complete the logic in the function judgeVegetable.

For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

*/
const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  if (vegetables !== undefined && metric !== undefined) {
    let max = 0;
    let max_index = 0;
    for (let i = 0; i < vegetables.length; i++) {
      if( i === 0) {
        max = vegetables[i][metric];
      } else {
        if ( vegetables[i][metric] > max) {
          max = vegetables[i][metric];
          max_index = i;
        }
      }
    }
    return vegetables[max_index].submitter;
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))