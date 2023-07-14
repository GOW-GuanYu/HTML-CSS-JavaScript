let compararComThis = function (param){
    console.log(this === param)
}
compararComThis(global) // pelo oq deu a enteder o This é o Objeto global.

const obj = {}
compararComThis = compararComThis.bind(obj) // aqui eu estou definindo através da função ".bind" q o "compararComThis" agora é a constante "obj".
compararComThis(global) // agora o "compararComThis" não é mais o Objeto global.
compararComThis(obj) // provando q o "compararComThis" agora é a constante "obj".

let compararComThisArrow = param => console.log(this === param) // se eu fizer uma "função arrow" o "This" não vai apontar como sendo o "global".
compararComThisArrow(global)
compararComThisArrow(module.exports) // ao oq o "This" está realmente atribuido.

compararComThisArrow = compararComThisArrow.bind(obj) // aqui entendemos que não conseguimos mudar o "This" da "Arrow function".
compararComThisArrow(obj)
compararComThisArrow(module.exports)// prova de que o "This" não muda mesmo forçando com o ".bind".