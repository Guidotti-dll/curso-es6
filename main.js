class Matematica {
    static soma(a,b) {
        return a + b; 
    }
}

console.log(Matematica.soma(1,2));



// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Lucas';
//     }

//         mostraUsuario() {
//             console.log(this.usuario);
//         }
//     }


// const MinhaLista = new TodoList();

// document.getElementById('novoTodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
// }

// MinhaLista.mostraUsuario();