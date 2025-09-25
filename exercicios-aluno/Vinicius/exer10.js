//1-3 horas por dia = amarelo
//3 Horas ou mais por dia = vermelho

let usoDiasDaSemana = [1, 2 , 2,4, 5, 1.2, 0.5, 12]; // Domingo, Segunda..

const indicadorDeUso = (numeroDeHoras) => {
   if (numeroDeHoras <= 1 ) {
    return ''
 } else if (numeroDeHoras <= 3 ) {
    return '';
 } else {
    return ''
 }   
}

console.log(typeof usoDiasDaSemana); //
console.log(typeof usoDiasDaSemana(0)); // number
console.log(typeof indicadorDeUso); //function

usoDiasDaSemana