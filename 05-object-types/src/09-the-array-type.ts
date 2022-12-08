function doSomething(value: Array<string>) {
  // ...
}

let myArr: string[] = ['hello', 'world'];

doSomething(myArr);
doSomething(new Array('hello', 'world'));

interface Array2<Type> {
  lenght: number;
  pop(): Type | undefined;
  push(...item: Type[]): number;
}
