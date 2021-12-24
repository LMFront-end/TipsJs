const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forma corta

const [lastItem] = array.slice(-1);
console.log(lastItem);

// forma rápida

const lastItem1 = array[array.length - 1];
console.log(lastItem1);

// en reversa

const lastItem2 = [...array].pop();
console.log(lastItem2);