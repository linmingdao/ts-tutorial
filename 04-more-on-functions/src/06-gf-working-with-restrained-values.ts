function minimumLength<T extends { length: number }>(
  obj: T,
  minimum: number,
): T {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
    // Type '{ length: number; }' is not assignable to type 'T'.
    // '{ length: number; }' is assignable to the constraint of type 'T',
    // but 'T' could be instantiated with a different subtype of constraint '{ length: number; }'.ts(2322)
  }
}

const arr = minimumLength([1, 2, 3], 6);
console.log(arr.slice(0));
