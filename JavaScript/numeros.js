//Forma de declarar Numbers

const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // (Number.IsInteger(peso1)) O peso é inteiro?

console.log(peso2)
console.log(Number.isInteger(peso2)) // (Number.IsInteger(peso3)) O peso é inteiro?

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // .toFixed(2) faz com que mostre certa quantidade de casas decimais, é tipo %.2f no C++.
console.log(typeof media)

console.log(media.toString(2)) // .toString(2) Transforma a media em string e imprime em binário.
console.log(typeof media)

// "Number" com 'N' maiúsculo é Função, e "number" com 'n' minúsculo é o dado de um tipo númerico -> const peso0 = 1
