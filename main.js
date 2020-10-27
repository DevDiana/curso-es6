/*
const arr = [1, 3 , 4, 3, ];

const newArr = arr.map(item => item * 2
 );

console.log(newArr);

const teste = () => {
    return 'teste';
}
console.log(teste());
*/

const usuario = {
    nome: 'Diana',
    idade: 23,
    endereco:{
        cidade: 'Rio do Sul',
        estado: 'SC',

    },
};

function mostraNome({nome, idade}){
    console.log(nome, idade);

}

mostraNome(usuario);
