class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGeneric1 = new GenericNumber<number>();
myGeneric1.zeroValue = 0;
myGeneric1.add = function (x, y) {
  return x + y;
};

let myGeneric2 = new GenericNumber<string>();
myGeneric2.zeroValue = '';
myGeneric2.add = function (x, y) {
  return x + y;
};
