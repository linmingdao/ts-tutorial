function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const aa = multiply(10, 1, 2, 3, 4, 60, 100);

console.log(aa);
