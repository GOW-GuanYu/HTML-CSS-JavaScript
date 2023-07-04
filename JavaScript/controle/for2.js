const notas =[6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Cleude',
    idade: 48,
    peso: 89
}
for(let atributo in pessoa){ //é importante colocar o "let" para não se vizualizar o atributo no console fora do laço.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}