//Armazenando uma função em uma variavel

const ImprimirSoma = function(a, b){

    console.log(a + b)

}
ImprimirSoma(2, 3)

//Armazenando uma função Arrow em uma variavel

const Soma = (a, b) => { // => substitui o nome parametro function

    return a+ b

}

console.log(Soma(2, 3))

//retorno implícito 

const Subtracao = (a, b) => a - b
console.log(Subtracao(3, 2))