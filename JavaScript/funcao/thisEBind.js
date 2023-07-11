const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar //erro de atribuição aqui, sempre vai sair undefined pois não está atribuido ao objeto pessoa
falar()
const falarDePessoa = pessoa.falar.bind(pessoa)//atribuindo a funcao ao objeto pessoa, essa é a forma de se consertar o erro como bind
falarDePessoa()