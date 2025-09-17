//  Para uma pessoa realizar um consórcio em um banco, é necessário que ela tenha 18 anos ou mais e possua renda mensal de 2 (dois) salários mínimos.
//  Faça um script em JavaScript que solicite a idade e a renda mensal do usuário e exiba a mensagem se ele está apto ou não realizar um consórcio


let idadeMinima = 18;
let rendaMinima = 2000; 

alert('Vamos verificar se você pode fazer um consórcio.');

let idade = prompt('Insira sua idade:');
let idadeNum = Number(idade);

let renda = prompt('Insira sua renda mensal:');
let rendaNum = Number(renda);

if (idadeNum >= idadeMinima && rendaNum >= rendaMinima) {
    console.log('Você pode fazer um consórcio.');

} 
else {
    console.log('Você não pode fazer um consórcio.');
}



