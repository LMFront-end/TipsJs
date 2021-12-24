// Para eliminar un elemento del array

const valorEliminar = 4;
const array = [1, 2, 3, 4, 5, 6];

const newArray = array.filter(
    number => number !== valorEliminar
);

console.log(newArray);

//Para eliminar varios elementos de un array

const elementosEliminar = ['Hola', 'Mundo'];

const otroArray = ['Hola', 'Mundo', 'Lina', 'Maria', 'Mateo', 'Javascript'];

const nuevoArray = otroArray.filter(
    palabra => elementosEliminar.includes(palabra)
);

console.log(nuevoArray);