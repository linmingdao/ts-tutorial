// 重载的方式
// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }

// 非重载的方式：如果可能，始终首选具有联合类型的参数，而不是重载
function len(x: any[] | string) {
  return x.length;
}

len('hello');
len([1, 2, 3]);
len(Math.random() > 0.5 ? 'hello' : [4, 5, 6]);
