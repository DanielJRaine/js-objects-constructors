'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

const totalDistance = function () {
  // define an auxillary variable
  let runs = this.runs;

  // define an accumulator
  let result = 0;

  // work on accumulator
  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }

  // return accumulator
  return result;
};


let run0 = new Run ('2015-05-25 15:00', 1200, 600);
let run1 = new Run ('2015-05-26 16:00', 1400, 800);
let mcFaceRuns = new User ('Person McFace', 'wdi@personmcface.com');

User.prototype.totalDistance = totalDistance();

mcFaceRuns.runs.push(run0);
mcFaceRuns.runs.push(run1);

// let totalDistance = function () {
//   let result = 0;
//   for (let i = 0, max = this.runs.length; i < max; i++) {
//     result += this.runs[i].distance;
//   }
//   return result;
// };

let longestRun = function () {
  let result = 0;
  let currentDistance = 0;

  for (let i = 0, max = this.runs.length; i < max; i++) {
    currentDistance = this.runs[i].distance;
    if (currentDistance > result) {
      result = this.runs[i].distance;
    }
  }
  return result;
};

let averageSpeed = function () {
  let totalTimeTaken = 0;

  for (let i = 0, max = this.runs.length; i < max; i++) {
    totalTimeTaken += this.runs[i].timeTaken;
  }

  return this.totalDistance()/totalTimeTaken;
};

module.exports = mcFaceRuns;
// copy this and paste into node
// let mcFaceRuns = require('./runs.js');



// 'use strict';
//
// const mcFaceRuns = {
//   name: 'Person McFace',
//   email: 'wdi@personmcface.com',
//   runs: [
//     {
//       date: '2015-05-25 15:00',
//       distance: 1200,
//       timeTaken: 600,
//     },
//     {
//       date: '2015-05-25 15:00',
//       distance: 1400,
//       timeTaken: 800,
//     },
//   ],
//

//
//   longestRun: function () {
//     // define an auxillary variable
//     let runs = this.runs;
//
//     let result = runs[0].distance;
//
//     for (let i = 1; i < runs.length; i++) {
//       if (runs[i].distance > result) {
//         result = runs[i].distance;
//       }
//     }
//
//     return result;
//   },
//
//   averageSpeed: function () {
//     // define an auxillary variable
//     let runs = this.runs;
//
//     let totalTime = 0;
//
//     for (let i = 0; i < runs.length; i++) {
//       totalTime += runs[i].timeTaken;
//     }
//
//     return this.totalDistance() / totalTime;
//   },
// };
//
// module.exports = mcFaceRuns;
