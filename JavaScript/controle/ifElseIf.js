Number.prototype.entre = function (inicio, fim){// comparando se o this(no caso o number) está entre o valor de inicio e o valor de fim.
    return this >= inicio && this <= fim // "&&" significa "E" ou "And" aqui ele vai rerotrnar se o valor estiver entre o inicio e o fim(maior ou igual q o inicio, menor ou igual ao fim)
}

const imprimirResultado = function(nota){
    // usando a função criada anteriormente (isso é incrivel tá, amo isso vtnc) 
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }
    else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }
    else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }
    else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }
    else{
        console.log('Nota inválida')
    }
}
//só vai funcionar com tipos Number pq foi assim q declaramos a função no inicio!
imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(6.99)
imprimirResultado(4)
imprimirResultado(-2)
imprimirResultado(11)