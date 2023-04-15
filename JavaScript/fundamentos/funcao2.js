//Armazenando uma função em uma variavel

const ImprimirSoma = function(a, b){

    console.log(a + b)

}
ImprimirSoma(2, 3)

//Armazenando uma função Arrow em uma variavel

const Soma = (a, b) => { // substitui o parametro 'function' pelo ' => '

    return a+ b

}

console.log(Soma(2, 3))

//retorno implícito 

const Subtracao = (a, b) => a - b
console.log(Subtracao(3, 2))

const Imprimir2 = a => console.log(a)
Imprimir2('Legal!!!')
