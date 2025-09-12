let idade = prompt('Insira a sua idade:');

console.log(idade);

if ( typeof idade != 'Number') {
	alert('Insira apenas números!!!');
}

// Verdadeiro se usuário inserir idade maior que
if ( idade > 18 ) {
	console.log('Pode tirar habilitação');
}
