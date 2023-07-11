function Pessoa(){
    this.idade = 0

    const self = this // a constante "self" serve para apontar para o objeto pessoa, já que o this.pessoa dentro função não estaria apontando para o objeto Pessoa.
    //função que dispara outra função atraves de um intevalo
    setInterval(function(){
        self.idade++//incrementando o valor da idade (aqui estava escito "this.idade++" mas ele cria um erro, pois ele não estaria apontando para o objeto Pessoa.)
        console.log(this.idade) //sem o .bind(this) o "this.idade" não estaria apontando para o objeto pessoa.
    }/*.bind(this)*/, 1000) //adicionando o intervalo de 1000(representado em millisegundos). O .bind(this) aponta para a pessoa pois ele está sendo executado dentro da função pessoa.
}

new Pessoa //instanciando a função