class Base {
  greet() {
    console.log('Hello World');
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(name.toUpperCase());
    }
  }
}

// class Derived extends Base {
//   greet(name: string) {
//     console.log(name.toUpperCase())
//   }
// }

const d = new Derived();
d.greet();
d.greet('reader');

const b: Base = d;
b.greet();

// 在开始之前，了解TypeScript对模块的定义是很重要的。
// JavaScript规范声明，任何没有导出或顶级await的JavaScript文件都应该被视为脚本，而不是模块。
export {};
