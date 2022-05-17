const instructorWithLongestName = function (instructors) {
  let longestName = "";
  let longestInstructor = {};
  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name
    if (longestName.length < nameLength.length) {
      longestName = nameLength;
      longestInstructor = instructors[i];
    }
  }
  return longestInstructor;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));
