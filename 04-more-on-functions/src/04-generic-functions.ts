function firstElement(arr: any[]) {
  return 100;
}

firstElement(['a', 'b', 'c']);

// 使用泛型改造
function firstElement2<T>(arr: T[]): T | undefined {
  return arr[0];
}

firstElement2(['a', 'b', 'c']);
firstElement2([1, 2, 3]);
firstElement2([]);

// 多个泛型 + 类型推断
function map<I, O>(arr: I[], func: (arg: I) => O): O[] {
  return arr.map(func);
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n));
