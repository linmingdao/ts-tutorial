// 重载函数签名，不要实现它
function makeDate(timestamp: number): Date;

// 重载函数签名，不要实现它
function makeDate(m: number, d: number, y: number): Date;

// 实现函数，需要兼容重载函数的签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 6, 7);
const d3 = makeDate(5, 9); // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
