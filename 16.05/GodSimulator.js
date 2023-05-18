class Human {
  constructor() {
    this.sex = ["Male", "Female"];
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.ears = 2;
    this.nose = 1;
    this.hairColor = [
      "Black",
      "Brown-Black",
      "Dark Brown",
      "Medium Brown",
      "Light Brown",
      "Dark Blonde",
      "Medium Blonde",
      "Light Blonde",
      "Very Light Blonde",
      "Red",
    ];
    this.skinColor = [
      "Alabaster",
      "Tan",
      "Ivory",
      "Honey",
      "Caramel",
      "Peaches and cream",
      "Praline",
      "Porcelain",
      "Marshmellow",
      "Cacao",
      "Saddle Brown",
      "Pecan",
      "Olive",
      "Espresso Brown",
      "Umber",
      "Sable",
      "Almond",
      "Beige",
      "Chestnut",
      "Bronze",
      "Mahogany",
      "Hickory",
      "Teak",
      "Bisque",
      "Carotenoid",
      "Sand",
    ];
    this.eyeColor = ["Brown", "Blue", "Green", "Gray", "Hazel", "Amber"];
  }

  static createdHumans = [];

  randomizeBodyPart(chance) {
    return Math.random() < chance ? 2 : this.getRandomValue();
  }

  getRandomValue() {
    return Math.floor(Math.random() * 2 + 1);
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

  getRandomName() {
    const nameLength = Math.floor(Math.random() * 5) + 3; // Random length between 3 and 7
    let name = this.getRandomLetter().toUpperCase(); // Start with a capital letter

    for (let i = 1; i < nameLength; i++) {
      name += this.getRandomLetter();
    }
    return name;
  }

  createNewHuman() {
    const human = new Human();
    human.name = this.getRandomName();
    human.sex = this.sex[this.getRandomIndex(this.sex)];
    human.skinColor = this.skinColor[this.getRandomIndex(this.skinColor)];
    human.hairColor = this.hairColor[this.getRandomIndex(this.hairColor)];

    const bodyPartChance = 0.9;
    human.legs = this.randomizeBodyPart(bodyPartChance);
    human.hands = this.randomizeBodyPart(bodyPartChance);
    human.eyes = this.randomizeBodyPart(bodyPartChance);
    human.ears = this.randomizeBodyPart(bodyPartChance);
    human.nose = this.randomizeBodyPart(bodyPartChance) - 1;
    human.eyeColor = this.eyeColor[this.getRandomIndex(this.eyeColor)];

    Human.createdHumans.push(human);

    return human;
  }
}

const humanGenerator = new Human();

humanGenerator.createNewHuman();
humanGenerator.createNewHuman();
humanGenerator.createNewHuman();
humanGenerator.createNewHuman();
humanGenerator.createNewHuman();
humanGenerator.createNewHuman();
humanGenerator.createNewHuman();

console.log(
  "          WELCOME TO GOD SIMULATOR!\n          #######################"
);
console.log(Human.createdHumans);
