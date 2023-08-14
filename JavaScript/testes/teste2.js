let nota1 = 10
let nota2 = 10
let media = (nota1 + nota2 ) / 2 

if (media <= 5){
    console.log('Faça a prova de recuperação de notas!')
    console.log(media)
}
else if (media >= 6){
    console.log('Você passou na prova!')
    console.log(media)
    if (media == 10){
        console.log('Parabéns pela nota máxima!')
    }
    else{}
}
else{
    console.log('Valor inválido!')
    console.log(media)
}


