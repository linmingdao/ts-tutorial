// case 1：implements 用来规范是否满足特定接口的约束
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('Ping!');
  }
}

class Ball implements Pingable {
  // ping() {}
  pong() {}
}

// case 2：支持一次性实现多个接口
interface A {
  x: number;
}
interface B {}
class C implements A, B {
  x = 10;
}

// 不可以多继承

// case 3：
interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string) {
    return s.toLowerCase() === 'ok';
  }
}

// case 4：
interface A {
  x: number;
  y?: number;
}

class CC implements A {
  x = 0;
  y = 1;
}

const c = new CC();
console.log(c.x);
console.log(c.y);

export {};
