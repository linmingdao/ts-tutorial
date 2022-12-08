interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// interface AddressWithUnit {
//   name?: string
//   street: string
//   city: string
//   country: string
//   postalCode: string
//   unit: string
// }

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

let awu: AddressWithUnit = {
  unit: '3单元',
  street: '清河街道',
  city: '北京',
  postalCode: '100000',
  country: '中国',
  name: '',
};

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

// 支持多继承
interface ColorCircle extends Colorful, Circle {}

const cc: ColorCircle = { color: 'red', radius: 100 };
