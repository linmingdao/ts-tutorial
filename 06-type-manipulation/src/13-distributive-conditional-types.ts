// case 1
type ToArray<T> = T extends any ? T[] : never;
type StrArrOrNumArr1 = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[]
let saon1: StrArrOrNumArr1 = [1];

// case 2
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never; // type StrArrOrNumArr = (string | number)[]
type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
let saon2: StrArrOrNumArr2 = [1, 'test'];
