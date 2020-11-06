const enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
}


console.log(Week.Monday);
// let week0 = Week[0];
// console.log(Week[0]);
// console.log(Week);

// 剩下的值会一次递增
const enum Week2 {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
}



const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

console.log(Direction.Up)

const value = 'UP'

if (value === Direction.Up) {
  console.log('go up!')
}