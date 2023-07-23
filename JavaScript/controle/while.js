function getInteiroaleatorioEntre(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do
while (opcao != -1){
    opcao = getInteiroaleatorioEntre(-1, 10)
    console.log(`Opção ecolhida foi ${opcao}.`)
}while (opcao != -1)
console.log('Até a próxima!')