const usuario = {
    nome: 'Lucas',
    idade: 20,
    endereco:{
        cidade:'Pelotas',
        estado: 'Rio Grande do Sul',
    },
};

function mostraNome({ nome , idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);