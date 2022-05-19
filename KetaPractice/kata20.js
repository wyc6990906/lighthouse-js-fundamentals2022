const blocksAway = function (directions) {
  let position = {east: 0, north: 0};
  let dir;
  let i;

  if (directions[0] === 'right') {
    position.east += directions[1];
    dir = 'east';
  } else if (directions[0] === 'left') {
    position.north += directions[1];
    dir = 'north';
  }
  // console.log('You are now facing: ' + dir + ' Current position is east: ' + position.east + ', north: ' + position.north);// establish initial direction
  for (i = 2; i < directions.length; i += 2) {
    if (directions[i] === 'right') {// first find new cardinal direction
      if (dir === 'north') {
        dir = 'east';
      } else if (dir === 'east') {
        dir = 'south';
      } else if (dir === 'south') {
        dir = 'west';
      } else if (dir === 'west') {
        dir = 'north';
      }
    } else if (directions[i] === 'left') {
      if (dir === 'north') {
        dir = 'west';
      } else if (dir === 'east') {
        dir = 'north';
      } else if (dir === 'south') {
        dir = 'east';
      } else if (dir === 'west') {
        dir = 'south';
      }
    }
    if (dir === 'north') {// now adjust position accordingly
      position.north += directions[i + 1];
      // console.log('You are now facing: ' + dir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
    } else if (dir === 'east') {
      position.east += directions[i + 1];
      // console.log('You are now facing: ' + dir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
    } else if (dir === 'south') {
      position.north -= directions[i + 1];
      // console.log('You are now facing: ' + dir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
    } else if (dir === 'west') {
      position.east -= directions[i + 1];
      // console.log('You are now facing: ' + dir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
    }
  }
  // console.log('the length of input array is: ' + directions.length);
  return position;
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
