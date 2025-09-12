/**
 * Operadores lógicos
 */

// Operador &&
// Verifica se duas (ou mais) condições são verdadeiras

if ( 10 > 5 && 20 > 17 ) {
	// Bloco de código executado caso todas as condições sejam verdadeiras
	console.log('10 é maior que 5 && 20 é maior que 17');
}

let modelo = 'Punto';
let marca = 'Fiat';
let ano = '2025';

if ( modelo == 'Punto' && marca == 'Fiat' && ano == '2024' ) {
	// Bloco de código executado caso todas as condições sejam verdadeiras
	console.log('Carro é um Fiat Punto 2024');
} else {
	// Bloco de código executado ao menos uma das condições seja falsa
	console.log('Carro não é um Fiat Punto 2024');
}

// Operador ou ||
// Verifica se ao menos uma das condições é verdadeira
if ( modelo == 'Mobi' || modelo == 'Uno' ) {
	// Bloco de código executado caso ao menos uma condição seja verdadeira
	console.log('O carro é um Mobi OU um Uno');
}

// Operador && e operador || combinados
ano = '2025';
modelo = 'Uno';

if ( ano == '2025' && modelo == 'Mobi' || modelo == 'Uno' ) {
	console.log('Veículo está no pacote promocional ✅');
} else {
	console.log('Veículo não elegível para promoção ❌');
}