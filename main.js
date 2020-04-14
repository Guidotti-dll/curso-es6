//REST

function soma(a, b,...params) {
    return params;
}

console.log(soma(1, 3, 4, 5, 6, 8));

//SPREAD 

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

const usuario1 = {
    nome: 'Lucas',
    idade: 20,
    empresa: 'SHP E-Spots'
}

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);