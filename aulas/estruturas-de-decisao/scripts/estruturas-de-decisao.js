/**
 * Estruturas de decisão
 */

// Se (If): verificação de condição
if ( 5 < 10 ) {
	console.log('5 é menor do que 10');
}

if ( 'Chuveiro' == 'Chuveiro' ) { // false
	console.log('As strings são iguais');
}

// Além de valores literais, podemos utilizar variáveis em comparações
let carro = 'Hyundai';
let carro2 = 'Toyota';

if ( carro != carro2 ) {
	console.log('Os carros são diferentes.');
}

/* 
Se... Senão (If-else):

se () então faça {
	// bloco de código executado caso condição seja verdadeira
} senão {
	// bloco de código executado caso condição seja falsa
}
*/
if ( carro == 'Nissan' ) {
	console.log('Carro é da marca Nissan');
} else {
	console.log('Carro não é um Nissan');
}

if ( carro == carro2 ) {
	console.log('Carros são iguais');
}

// Senão se (Else-If)
// Encadeamento de condições. Caso a primeira condição (if) não seja verdadeira,
// o script segue para a verificação subsequente.
if ( ano == '2025' ) {
	console.log('O ano é 2025.');
} else if ( ano == '2024' ) {
	console.log('O ano é 2024.');
} else {
	console.log('O ano não é nem 2025, nem 2024.');
}