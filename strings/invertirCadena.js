const reversa = (palabra) => {

    // Forma sencilla
    //return palabra.split('').reverse().join('');

    //forma moderna
    //return [...palabra].reverse().join('');

    //Aplicando reduce
    let frase = palabra.split('').reduce((rev, char) => `${char} ${rev}`, '');

    return frase;

}

console.log(reversa('marzo'));