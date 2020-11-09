// 1 泛型用在函数上
function echo<T>(arg: T): T {
  return arg
}
const result = echo(true)

// 2 使用多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

// 3
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])

// 4 定义泛型约束
interface IWithLength {
  length: number
}

// 使用泛型约束
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])

// 5 泛型用到类上
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

// 6 泛型用在接口上
interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = { key: 123, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'test', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

// 7 泛型描述函数的样子
interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string): string {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect
