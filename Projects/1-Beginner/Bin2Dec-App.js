var numero = window.prompt('Digite um número binário de 8 digitos: ')
var digitos = 1
var resto = numero
var decimal = 0

while (resto / 10 > 1) {
  resto = resto / 10
  digitos++
}

console.log('Digitos: ' + digitos)
if (digitos > 8) {
	console.log('seu numero é maior que 8 digitos')
} else {
	for(var i = 1; i < digitos+1; i++){
    algarismo = parseInt(numero % 10)
    numero = numero / 10
  	
    console.log(algarismo)
  	decimal = decimal + algarismo * (2 ** (i-1))
  }
  console.log('Seu número em decimal é: ' + decimal)
}


