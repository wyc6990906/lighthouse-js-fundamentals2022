const organizeInstructors = function (instructors) {
  // Put your solution here
  let finalObj = {}
  let courseNames = [] // ['ios','web]
  instructors.map(item => {
    let course = item.course
    if (courseNames.indexOf(item.course) === -1) {
      courseNames.push(course)
    }
  })
  courseNames.map(course => {
    finalObj[course] = []
    for (let i = 0; i < instructors.length; i++) {
      if (instructors[i].course === course) {
        finalObj[course].push(instructors[i].name)
      }
    }
  })
  return finalObj
};
/*  {
       iOS: ["Samuel"],
       Web: ["Victoria", "Karim", "Donald"]
    }
    {
       Blockchain: ["Brendan"],
       Web: ["David", "Carlos"],
       iOS: ["Martha"]
}*/
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
