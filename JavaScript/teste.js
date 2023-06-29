const imprimirNota = function (nota){
    switch (Math.floor(nota)){ //arredondando para baixo, mas tambem posso adicionar o 'ciel' para arredondar para cima
        case 10:
            console.log('Parabéns! você atingiu a nota máxima em excelência.') 
        break
        case 9: 
            console.log('Parabéns! Você ficou por um triz de conquistar a nota máxima, continue se esforçando. ;)')
        break    
        case 8: case 7:
            console.log('Você passou no teste!')
        break
        case 6: case 5:
            console.log('Faça o teste de recuperação de notas.')
        break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Você falhou no teste! Boa sorte na próxima vez. :)')
        break
}
if (nota == 10){
    console.log('Você está legivel para o sorteio de um carro zero! entre em contato com a diretoria para melhor detalhes.')
}
else if (nota == 9){
    console.log('Você está legivel para o sorteio de um carro zero! entre em contato com a diretoria para melhor detalhes.')
}
else{}

}
imprimirNota(10)
imprimirNota(9)
imprimirNota(4)