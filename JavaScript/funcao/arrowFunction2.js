function Pessoa(){
    this.idade = 0 

    setInterval( ()=>{ //criando uma arrow function dentro do intervalo/temporizador.
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa // imprimindo a função criada.