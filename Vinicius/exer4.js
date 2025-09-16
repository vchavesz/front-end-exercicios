//5. Em um concurso para professor em uma instituição de ensino, os seguintes critérios são considerados com as respectivas pontuações:
//	- Experiência: até 5 anos = 10 pontos; 5 anos ou mais = 20 pontos;
//	- Formação: superior = 10 pontos; pós-graduação = 20 pontos; mestrado = 30 pontos; doutorado = 40 pontos;
// //Faça um script em JavaScript que solicite a experiência e a formação do candidato, e calcule e exiba qual seria a sua pontuação para o concurso.


let experiencia = prompt("Quantos anos de experiência você tem?");
let formacao = prompt("Qual sua formação? (superior, pos, mestrado, doutorado)");

let pontos = 0;

// Experiência
if (experiencia < 5) {
  pontos += 10;
} else {
  pontos += 20;
}

// Formação
if (formacao === "superior") {
  pontos += 10;
} else if (formacao === "pos") {
  pontos += 20;
} else if (formacao === "mestrado") {
  pontos += 30;
} else if (formacao === "doutorado") {
  pontos += 40;
} else {
  alert("Formação inválida.");
}

alert("Sua pontuação total é: " + pontos);
