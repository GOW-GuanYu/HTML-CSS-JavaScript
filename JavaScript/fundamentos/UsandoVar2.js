// FUJA DOS ESCOPOS GLOBAIS

var Numero = 1 

{

    var Numero = 2
    console.log('Dentro =', Numero)     //como ela não está em um escopo diferente ela modifica o produto original

}

console.log('Fora =', Numero)