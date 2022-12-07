function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const myArr = combine([1, 2, 3], [4, 5, 6]);

// const myArr1 = combine(['string'], [1, 2, 3]); // Type 'number' is not assignable to type 'string'.ts(2322)

// 通过指定类型参数来解决
const myArr2 = combine<string | number>(['string'], [1, 2, 3]);

console.log(myArr2);
