{
  type Dog = {
    bark: () => void;
  };

  type Cat = {
    meow: () => void;
  };

  function makeSound(animal: Dog | Cat) {
    if ("bark" in animal) {
      animal.bark();
    } else {
      animal.meow();
    }
  }

  const dog: Dog = { bark: () => console.log("Woof!") };
  const cat: Cat = { meow: () => console.log("Meow!") };

  makeSound(dog); // Woof!
  makeSound(cat); // Meow!
}
