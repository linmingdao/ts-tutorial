// 条件类型：case 1
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // type Example1 = number;
type Example2 = RegExp extends Animal ? number : string; // type Example2 = string;

// 没有使用条件类型：case 2
interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw '';
}

// 使用条件类型：case 3
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel2<T extends number | string>(idOrName: T): NameOrId<T> {
  throw '';
}

// type a = NameLabel
let v = createLabel2('typescript');

// type b = IdLabel
let b = createLabel2(2.8);

// type c = NameLabel | IdLabel
let c = createLabel2(Math.random() > 0.5 ? 'hello' : 42);
