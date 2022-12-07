// 回调函数存在可选参数情况
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
    callback(arr[i]);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 3, 4], (a, i) => console.log(a, i));
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed()); // Error：Object is possibly 'undefined'.ts(2532)
});

// 移除掉回调函数的可选参数
// 在JavaScript中，如果调用的函数参数比形参多，那么额外的参数就会被忽略。
// TypeScript的行为也是一样的。具有更少形参(相同类型)的函数总是可以取代具有更多形参的函数。
function myForEach2(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach2([1, 2, 3], (a) => console.log(a));
myForEach2([1, 3, 4], (a, i) => console.log(a, i));
myForEach2([1, 2, 3], (a, i) => console.log(i.toFixed()));

// 在为回调函数编写函数类型时，永远不要编写可选形参，除非您打算在不传递实参的情况下调用该函数
