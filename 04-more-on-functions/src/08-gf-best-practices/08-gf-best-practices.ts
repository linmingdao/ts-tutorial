// 原则一：类型参数下推
function firstElement1<T>(arr: T[]) {
  return arr[0];
}

// <T extends any[]> => 类型约束 => 表示传入的类型满足数组即可
function firstElement2<T extends any[]>(arr: T) {
  return arr[0];
}

const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]); // b 被类型推断为 any

// 原则二：使用更少的类型参数
function filter1<T>(arr: T[], func: (arg: T) => boolean) {
  return arr.filter(func);
}

function filter2<T, Func extends (arg: T) => boolean>(arr: T[], func: Func) {
  return arr.filter(func);
}

// 原则三：类型参数应出现两次
function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s);
}

greet('World');

function greet2(s: string) {
  console.log('Hello, ' + s);
}
