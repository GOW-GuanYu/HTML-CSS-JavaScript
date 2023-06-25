const ImprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // para não sair executando os outros após entrar neste case
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Faça a Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //caso adicione outros valores sem ser de um dos Case, improtante colocar o Break se vc for colocar outro case após ele
            console.log('Nota Inválida')
    }
}
ImprimirResultado(10)
ImprimirResultado(9)
ImprimirResultado(8.56)
ImprimirResultado(7.12)
ImprimirResultado(6.50)
ImprimirResultado(5.90)
ImprimirResultado(4.43)
ImprimirResultado(3.11)
ImprimirResultado(2.13)
ImprimirResultado(1.69)
ImprimirResultado(0)
ImprimirResultado(-1)