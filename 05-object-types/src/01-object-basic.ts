function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name;
}

interface Person1 {
  name: string;
  age: number;
}

function greet1(person: Person1) {
  return 'Hello ' + person.name;
}

type Person2 = {
  name: string;
  age: number;
};

function greet2(person: Person2) {
  return 'Hello ' + person.name;
}
