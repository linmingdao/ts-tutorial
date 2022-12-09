interface Lengthwise {
  length: number;
}

// 泛型约束
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  arg.length;
  return arg;
}

loggingIdentity(3);
loggingIdentity(['hello', 'world']);
