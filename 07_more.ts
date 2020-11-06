// type aliases 类型别名
type PlusType = (x: number, y: number) => number

function sum(x: number, y: number): number {
  return x + y
}

const sum2: PlusType = sum

// 联合类型
type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// type assertion 类型断言
function getLength(input: string | number): number {
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }

  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}

// 类型声明文件
// tsconfig 配置声明文件位置
// npm @types/react 去安装对应第三方库的声明文件