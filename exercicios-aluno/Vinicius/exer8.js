// 1. Escreva um programa que solicite 1 ou 0. Caso o usuário insira um número diferente, o programa deverá solicitar novamente uma entrada do usuário




let entrada;

do {
  entrada = prompt("Digite 1 ou 0:");
} while (entrada !== "1" && entrada !== "0");

alert("Você digitou " + entrada + ". Obrigado!");
