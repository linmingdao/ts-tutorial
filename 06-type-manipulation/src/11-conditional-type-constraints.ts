// 没有使用条件类型约束的时候，该索引类型会报错，因为无法保证泛型T中存在message字段
type MessageOf1<T> = T['message'];

// 使用泛型约束
type MessageOf2<T extends { message: unknown }> = T['message'];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf2<Email>; // type EmailMessageContents = string

// 使用条件类型约束
type MessageOf3<T> = T extends { message: unknown } ? T['message'] : never;

interface Dog {
  bark(): void;
}

type EmailMessageContents1 = MessageOf3<Email>; // type EmailMessageContents1 = string
const emc: EmailMessageContents1 = 'balabala...';

type DogMessageContents = MessageOf3<Dog>;
const dmc1: DogMessageContents = 'error'; // Type 'string' is not assignable to type 'never'.
const dmc2: DogMessageContents = 'error' as never;

// 另外一个例子
type Flatten<T> = T extends any[] ? T[number] : T;
type Str = Flatten<string[]>; // type Str = string
type Num = Flatten<number>; // type Num = number
