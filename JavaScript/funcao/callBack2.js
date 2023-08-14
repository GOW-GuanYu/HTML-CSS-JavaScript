// Utilizando a função filter
const notas = [7.7, 6.5, 6.6, 8.9, 8.4, 1.5, 1.8]

// Sem callback

const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){ // Nesessário especificar o [i], pois é onde o array se está relacioando no momento.
        notasBaixas1.push(notas[i]) // A função push adiciona o elemento ao array.
    }
}
console.log(notasBaixas1)

// Com callback

const notasBaixas2 = notas.filter( function(nota){ // Esse "nota" é um novo array que estamos adicionando os valores filtrados.
    return nota < 7
})
console.log(notasBaixas2)

// utilizando o arrow

const notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)

const notasBaixas4 = notas.filter( nota =>{return nota < 7})
console.log(notasBaixas4)

// forma mais elegante

const NotasMenoresQue7 = nota => nota < 7
const notasBaixas5 = notas.filter(NotasMenoresQue7)
console.log(notasBaixas5)