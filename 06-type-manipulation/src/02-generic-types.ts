// 1
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity1: <Type>(arg: Type) => Type = identity;
let myIdentity2: <Input>(arg: Input) => Input = identity;
let myIdentity3: { <Type>(arg: Type): Type } = identity;
myIdentity3<number>(1);

// 2
interface GenericIdentityFn1 {
  <Type>(arg: Type): Type;
}
let myIdentity4: GenericIdentityFn1 = identity;
myIdentity4<string>(''); // 类型放在调用签名上

// 3
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
let myIdentity5: GenericIdentityFn2<string> = identity;
myIdentity5('1'); // 类型放在接口本身
