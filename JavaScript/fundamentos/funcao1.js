// funcao sem retorno
// sempre colocar BONS NOMES de funcoes

function ImprimirSoma(a, b){

    console.log(a + b)

}

ImprimirSoma(2, 3)
ImprimirSoma(2) // também posso enviar só um valor, mas o outro vai ficar como Undefined e vai imprimir como NaN(Not a Number)
ImprimirSoma(2, 14, 4 , 5, 6, 7, 8) // aqui ele vai ignorar os outros numeros e só vai pegar os 2 primeiros

// funcao com retorno

function Soma(a, b = 0){ // variável b = 0

    return a + b

}
console.log(Soma(3))

function Multiplicacao(a, b = 2){ 

    return a * b

}
console.log(Multiplicacao(5)) // também posso adicionar 2 números e modificar a variável console.log(Multiplicacao(5, 5))