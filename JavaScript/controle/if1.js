
// Entendendo o IF no javascript

function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('Parabéns' + nota)
    }
}
soBoaNoticia(7)
soBoaNoticia(6.9)

function SeForVerdadeEuFalo(valor){
    if(valor) {
        console.log("É Verdade..." + valor)
    }
}
SeForVerdadeEuFalo('')
SeForVerdadeEuFalo(-1)
SeForVerdadeEuFalo(1)
SeForVerdadeEuFalo([])
SeForVerdadeEuFalo('?')
SeForVerdadeEuFalo([1, 2])
SeForVerdadeEuFalo({})