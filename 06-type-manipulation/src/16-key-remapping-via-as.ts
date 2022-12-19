// case 1：You can leverage features like template literal types to create new property names from prior ones
type Getters<T> = {
  [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key];
};

interface MyPerson {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<MyPerson>;

// case 2：You can filter out keys by producing never via a conditional type
// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
};

interface Circle {
  kind: 'circle';
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

// case 3：You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:
type EventConfig<Events extends { kind: string }> = {
  [E in Events as E['kind']]: (event: E) => void;
};

type SquareEvent = { kind: 'square'; x: number; y: number };
type CircleEvent = { kind: 'circle'; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;
