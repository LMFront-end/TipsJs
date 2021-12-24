const lmfrontend = {
    "nombre": "Lina",
    "apellidos": "Guerrero López",
    "github": "LMFront-end",
    "instagram": "lmfrontend14",
    "twitter": "holamundo14"
}

const { twitter, ...socialNetworks } = lmfrontend;

console.log(socialNetworks);