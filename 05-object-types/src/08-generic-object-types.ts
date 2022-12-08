// any方式
/*
interface Box {
  contents: any
}

let box: Box = {
  contents: 'hello'
}
*/

// unknown方式
/*
interface Box {
  contents: unknown
}

let x: Box = {
  contents: 'hello world'
}
*/

// if (typeof x.contents === 'string') {
//   console.log(x.contents.toLowerCase())
// }

// console.log((x.contents as string).toLowerCase())

// 函数重载方式
interface NumberBox {
  contents: number;
}
interface StringBox {
  contents: string;
}
interface BooleanBox {
  contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

// 泛型对象
/*
interface Box<Type> {
  contents: Type
}

let boxA: Box<number> = {
  contents: 100
}

interface StringBox {
  contents: string
}

let boxB: StringBox = {
  contents: 100
}
*/

// 泛型对象可以重复使用
/*
interface Box<Type> {
  contents: Type;
}

interface Apple {
  // ...
}

let a: Apple = {};

type AppleBox = Box<Apple>;
let ab: AppleBox = {
  contents: a,
};
*/

// 使用类型别名定义泛型对象
type Box<Type> = {
  contents: Type;
};

// 定义通用的辅助类型
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullString = OneOrManyOrNull<string>;
