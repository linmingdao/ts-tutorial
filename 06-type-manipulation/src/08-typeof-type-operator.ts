// case 1：原生 js 的 typeof 操作符
console.log(typeof 'Hello World'); // string

// case 2
let s = 'hello';
let n: typeof s; // let n: string
n = 'hello';
n = 100;

// case 3：RetrunType<T>
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // type K = boolean

function f() {
  return { x: 10, y: 3 };
}
type L = ReturnType<typeof f>;
const l: P = 100;

function msgbox() {}
let shouldContinue: typeof msgbox;
shouldContinue = 100;
