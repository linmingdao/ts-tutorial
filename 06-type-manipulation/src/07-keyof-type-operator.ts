// case 1
type Point = {
  x: number;
  y: number;
};

type P = keyof Point;

const p1: P = 'x';
const p2: P = 'y';
const p3: P = 'z';

// case 2
type Arrayish = {
  [n: number]: unknown;
};
type A = keyof Arrayish;
const a: A = 0;

// case 3
type Mapish = {
  [k: string]: boolean;
};

type M = keyof Mapish; // type M = string | number --> JavaScript【对象键】总是被强制转换为字符串，所以obj[0]总是与obj["0"]相同

const m1: M = 's';
const m2: M = 100;
const m3: M = true;
