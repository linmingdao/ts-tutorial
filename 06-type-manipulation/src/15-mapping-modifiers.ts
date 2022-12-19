// Removes 'readonly' attributes from a type's properties
type CreateMutable<T> = {
  -readonly [Property in keyof T]: T[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<T> = {
  [Property in keyof T]-?: T[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
