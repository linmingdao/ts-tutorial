// case 1
type Person0 = {
  age: number;
  name: string;
  alive: boolean;
};

type MyAge = Person0['age'];
let age: MyAge = '90';

// case 2
interface Person1 {
  name: string;
  age: number;
  alive: boolean;
}

type I1 = Person1['age' | 'name']; // type I1 = string | number
const i11: I1 = 100;
const i12: I1 = '';
const i13: I1 = true;

// case 3
type I2 = Person1[keyof Person1]; // type I2 = string | number | boolean
const I21: I2 = '';
const I22: I2 = 100;
const I23: I2 = true;
const I24: I2 = {};

// case 4
type AliveOrName = 'alive' | 'name';
type I3 = Person1[AliveOrName]; // type I3 = string | boolean
const I31: I3 = true;
const I32: I3 = 'hello';
const I33: I3 = 100;

// case 5
type I4 = Person1['alve']; // Property 'alve' does not exist on type 'Person1'.

// case 6
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = typeof MyArray[number]; // type Person = { name: string, age: number }
const p: Person = {
  name: 'xiaoqian',
  age: 11,
  // alive: true,
};

// case 7
type Age = typeof MyArray[number]['age'];
const age10: Age = 11;

type Age2 = Person1['age'];
const age2: Age2 = 300;

// case 8
// const key = 'age';
type key = 'age';
type Age3 = Person[key];
