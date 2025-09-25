//1-3 horas por dia = amarelo
//3 Horas ou mais por dia = vermelho

let usoDiasDaSemana = [2, 2.4, 5, 1.2, 0.5];
let diasDaSemana = [
	'Segunda-feira',
	'Terça-feira  ',
	'Quarta-feira ',
	'Quinta-feira ',
	'Sexta-feira  ',
];

// Determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
	if ( numeroDeHoras <= 1 ) {
		return '🟢';
	} else if ( numeroDeHoras <= 3 ) {
		return '🟡';
	} else {
		return '🔴';
	}
}

for(let contador = 0; contador < usoDiasDaSemana.length ; contador++) {
	let farol = indicadorDeUso(usoDiasDaSemana[contador]);
	let dia = diasDaSemana[contador];
	let horas = usoDiasDaSemana[contador];
	// let mensagem =  'hora de uso';

	// if ( horas > 1 ) {
	// 	mensagem = 'horas de uso';
	// }

	let mensagem = (horas > 1) ? 'horas de uso' : 'hora de uso'; // Operador ternário

	console.log(`${farol} 📅 ${dia} | ${horas.toFixed(2)} ${mensagem}`);
}