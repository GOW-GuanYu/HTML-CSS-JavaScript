// Criando função arrow e explicando operadores Ternários
// O operado Ternário é composto em 3 partes:
    // A primeira parte e a EXPRESSÃO.
    // A segunda parte irá retornar apenas quando a expressão na primeira parte for VERDADEIRA.
    // A segunda parte será retornada apenas se a expressão adicionada na primeira parte for FALSA.
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // aqui ele vai retornar 'Aprovado' se maior q 7, se não ele ira retornar 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.9))