/*
const arr = [1, 3 , 4, 3, ];

const newArr = arr.map(item => item * 2
 );

console.log(newArr);

const teste = () => {
    return 'teste';
}
console.log(teste());


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


//REST

function soma(...params){
    return a + b;

}
console.log(soma(1, 3, 4))
(soma(1, 3, 4))

//SPREAD

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [ ...arr1, ...arr2]

console.log(arr3);


const nome = "Diana";
const idade  = 24;
console.log(`Meu nome é ${nome} e tenho ${idade}anos`)


const nome = "Diana";
const idade  = 24;

const usuario = {
    nome,
    idade,
    empresa: "Time Energy"

};

const minhaPromise = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{ resolve('OK')}, 2000);
});

async function executaPromise(){
    const response = await minhaPromise();
    console.log(response);
}

executaPromise();

*/

import  axios from 'axios';

class Api{
    static async getUserInfo(username){
        const response = await axios.get('htpps://api.github.com')
        console.log(response);
    }
}
Api.getUserInfo('diana3g')
