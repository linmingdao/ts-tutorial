function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest('felix', 'lu');
// const notOk = longest(10, 100); // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.ts(2345)
