function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2    // "||" significa "ou", o "ou" significa que se qualquer um dos dois derem certo vai ser executado um parâmetro 
    const comprarTv50 = trabalho1 && trabalho2  // "&&" significa uma operação do tipo "e" só funcionará se os dois forem verdadeiros

    // const comprarTv32 = trabalho1 !!(trabalho1 ^ trabalho2) // bitwise xor (tipo bit a bit)
    const comprarTv32 = trabalho1 != trabalho2 // "ou EXCLUSIVO" usando o metodo matemático do: mais + mais = mais, mais + menos = menos e etc
    const manterSaudavel = !comprarSorvete //operador unário, neste caso aqui só funciona se o parâmetro definido for diferente de verdadeiro - existe um tópico sobre nesta pasta

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //criando um objeto com os parâmetros
}

//adicionando valores na função
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))