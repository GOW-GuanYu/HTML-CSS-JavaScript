function teste1(num){// javascript desconsidera a identação, mas isso não significa q vc deve fazer, preze pela organização do seu código.
    if(num > 7)
        console.log(num)

    console.log('Final')
    //{console.log(num) console.log('Final')}
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ //aqui temos uma setença de codigo vazia após o ";", por este motivo ele não executa nada, não use o ";" em estruturas de controle. 
        console.log(num)
    }
}