type Shape = {};

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;
  let yPos = opts.yPos;
  console.log(xPos);
}

function paintShape1(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
  console.log(xPos);
}

// 采用解构的形式指定默认值
function paintShape2({
  shape: Shape,
  // 请注意，目前没有办法在解构模式中放置类型注释
  // 这是因为下面的语法在JavaScript中已经有了不同的含义
  xPos: number = 0, // 这个是为 xPos 定义别名，不是指定类型
  yPos = 0,
}: PaintOptions) {
  // let xPos = opts.xPos === undefined ? 0 : opts.xPos
  // let yPos = opts.yPos === undefined ? 0 : opts.yPos
  console.log(Shape);
  console.log(number);
}

// 测试
const shape: Shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
