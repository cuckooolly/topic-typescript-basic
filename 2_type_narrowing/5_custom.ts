{
  type Dog = {
    bark: () => void;
  };

  type Cat = {
    meow: () => void;
  };

  function isDog(animal: Dog | Cat): animal is Dog {
    return "bark" in animal;
  }

  const makeSound = (animal: Dog | Cat) => {
    if (isDog(animal)) {
      animal.bark();
    } else {
      animal.meow();
    }
  };

  const dog: Dog = { bark: () => console.log("Woof!") };
  const cat: Cat = { meow: () => console.log("Meow!") };

  makeSound(dog); // Woof!
  makeSound(cat); // Meow!
}
