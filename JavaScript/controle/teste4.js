function getInteiroaleatorioEntre(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do
while (opcao != -1){
    opcao = getInteiroaleatorioEntre(-1, 1000)
    console.log(`Opção ecolhida foi ${opcao}.`)

    switch (opcao){
        case 100: case 200:
            console.log('TESTE')
        break
        case 300: case 400:
            console.log('TESTE')
        break
    }
}while (opcao != -1)