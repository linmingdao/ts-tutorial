// case 1：获取函数的返回类型
type GetReturnType<T> = T extends (...args: never[]) => infer Return
  ? Return
  : never;

type MyNum = GetReturnType<() => number>; // type Num = number
let num: MyNum = 100;

type MyStr = GetReturnType<(x: string) => string>; // type Str = string
let str: MyStr = '';

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // type Bools = boolean[]
let bools: Bools = [true, false];

type Never = GetReturnType<string>; // type Never = never
let nev: Never = 'error' as never;

// case 2：推断是根据最后一个实现签名进行的，跟重载签名无关
function stringOrNum(x: string): number;
function stringOrNum(x: number): string;
function stringOrNum(x: string | number): string | number;
function stringOrNum(x: string | number): string | number {
  return Math.random() > 0.5 ? 'hello' : 23;
}

type T1 = ReturnType<typeof stringOrNum>; // type T1 = string | number
const t1: T1 = true;
