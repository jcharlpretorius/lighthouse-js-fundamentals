/**Lighthouse Labs prep material: Voting Station Calculation - A code evaluation problem for functions in JS */ 

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  /* loop through the arrays and check their capacity and types for voting station suitability
  Appropriate stations must have a capacity of atleast 20 people and be a school or community centre
  */
  // create empty array to store appropriate stations
  let goodStations = [];
  // loop through stations array, check capacity and type of each building, push appropriate building name to goodStations
  for(let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
}
chooseStations(stations);

console.log(chooseStations(stations));
