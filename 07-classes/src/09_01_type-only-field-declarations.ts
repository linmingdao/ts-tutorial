interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
    console.log(this.resident);
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
    console.log(this.resident);
    // 因为resident属性是继承于父类的，所以我们传入 Dog 类型初始化它的时候，是无法访问 breed
    // 为此我们可以为来自父类的 resident 属性通过 declare 关键字指定更具体的类型
    this.resident.breed;
  }
}
