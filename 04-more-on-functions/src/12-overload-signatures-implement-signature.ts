// 从外部看不到实现的签名。编写重载函数时，应始终在函数实现上方有两个或多个签名。
function fn0(x: string): void;
function fn0() {}

fn0('hello');

// 实现签名需要兼容所有重载函数 -> 参数兼容
function fn1(x: boolean): void;
function fn1(x: string): void;
function fn1(x: boolean | string) {}

// 实现签名需要兼容所有重载函数 -> 返回值兼容
function fn2(x: string): string;
function fn2(x: boolean): boolean;
function fn2(x: string | boolean): string | boolean {
  return 'hello';
}
