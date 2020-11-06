interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
}

let viking: IPerson = {
  id: 1234,
  name: 'viking',
}
