const array1 = [5, 15, 8, 130, 44];

const funcionDePrueba = (paramaetro) => {
    return paramaetro > 10
}

const found = array1.find(funcionDePrueba)

console.log(found);