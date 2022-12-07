class Ctor {
  s: string;
  constructor(s: string) {
    this.s = s;
  }
}

// 定义构造函数类型别名
type SomeConstructor = {
  new (s: string): Ctor; // Class也可以作为类型
};

function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

const f = fn(Ctor);
console.log(f.s);

// 既可以调用也可以实例化的函数签名
interface CallOrConstructor {
  new (s: string | number): Date; // 构造函数形式的签名方式
  (n?: number | string): number | string; // 直接调用的签名方式
}

// js的Date就是既可以调用也可以new
function fn1(date: CallOrConstructor) {
  let d = new date('2021-12-20');
  let n = date(100);
  console.log(d, n);
}

fn1(Date);
