interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// 类型别名形式定义交叉类型
type ColorfulCircle = Colorful & Circle;

const ccc: ColorfulCircle = { color: 'red', radius: 100 };

// 匿名形式定义交叉类型
function draw(circle: Colorful & Circle) {
  console.log(circle.color);
  console.log(circle.radius);
}

draw({ color: 'red', radius: 100 });

draw({ color: 'green', rdaius: 100 });
