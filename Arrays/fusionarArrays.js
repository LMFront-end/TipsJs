const animals = ['🐴', '🦈', '🐖', '🐰', '🐔'];

const newAnimals = ['🦒', '🐱', '🐶', '🐠'];


//con el spread operator

const farm = [
    ...animals,
    ...newAnimals
]
console.table(farm);

//método concat

const farm2 = animals.concat(newAnimals);
console.log(farm2);

//mutar el array original
const farm3 = animals.push(...newAnimals);
console.log(animals);