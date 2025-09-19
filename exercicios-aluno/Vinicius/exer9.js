// Defina uma variável com uma "senha". 
// Faça um laço de repetição que solicite a senha até que o usuário insira a senha correta (utilize prompt para capturar a entrada do usuário);

let senha;

do{
senha = prompt('Digite uma senha de 4 digitos');
} while(senha !== "1234");

alert("Você digitou a senha correta obrigado!");

