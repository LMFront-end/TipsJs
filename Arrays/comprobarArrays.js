// forma idónea

const datos = ['Lina', 'Guerrero', 23, 'github'];

const fomar1 = datos.includes('instagram');
console.log(fomar1);

// Buscar en estructuras complejas

const usuarios = [{
        nombre: 'Mateo',
        apellido: 'Vlad',
        edad: 25,
        soltero: false
    },
    {
        nombre: 'Lina',
        apellido: 'Guerrero',
        edad: 23,
        soltera: true
    }
]

const busqueda = usuarios.some((usuario) => {

    usuario.nombre === 'Mateo';

    return usuario;
});

console.log(busqueda);