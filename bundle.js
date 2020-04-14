"use strict";

var usuario = {
  nome: 'Lucas',
  idade: 20,
  endereco: {
    cidade: 'Pelotas',
    estado: 'Rio Grande do Sul'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
