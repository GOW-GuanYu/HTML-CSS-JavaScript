
// Uma função anônima é uma função sem nome.

const soma = function (x, y) {
 return x + y
}

// Lembrando que se eu não atribuir nada o valor padrão atribuido ao "operacao" será "soma". 
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)// Como já explicado no comentário anterior, aqui, o valor padrão de "operacao" foi atribuido e foi-se feito a soma.

imprimirResultado(3, 4, soma)// Eu também posso atribuir diretamente a operacao com a soma.

// Posso também atribuir uma funcão anônima dentro da chamada desta função (isso é mais comum do q se parece, é estranho, eu sei).
imprimirResultado(3, 4, function(x,y){
    return x - y
})

// Da mesma forma que eu posso atribuir uma função anônima, eu também posso atribuir uma arrow function.
imprimirResultado(3, 4, (x, y) => x * y )

// IMPORTANTE: Funções também podem ser feitas dentro de objetos (preciso estudar melhor formas de utiliza-lá).
// Também e interessante salientar a importância do costume de utilização deste tipo de definição, ela é bastante utilizada atualmente.
const pessoa = {
    falar: function() {
        console.log('Sou uma Função Anônima dentro de um objeto.')
    },
    falar2: function(){
        console.log('Sou outra Função Anônima dentro de um objeto.')
    }
}
pessoa.falar()// Você consegue utilizar a função apartir do atributo do objeto definido.
pessoa.falar2()// Para entender melhor como a função é chamada. Pode-se ter várias funções dentro de um objeto.