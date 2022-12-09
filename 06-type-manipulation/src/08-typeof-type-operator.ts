// case 1
console.log(typeof 'Hello World'); // string

// case 2
let s = 'hello';
let n: typeof s; // let n: string
n = 'hello';
n = 100;

// case 3
// RetrunType<T>

// type Predicate = (x: unknown) => boolean
// type K = ReturnType<Predicate>

// function f() {
//   return {
//     x: 10,
//     y: 3
//   }
// }
// type P = ReturnType<typeof f>
// const p: P = 100

function msgbox() {}
let shouldContinue: typeof msgbox;
shouldContinue = 100;
