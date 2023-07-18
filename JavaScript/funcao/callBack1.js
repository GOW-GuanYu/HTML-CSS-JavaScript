// A ideia do callback é passar um função para outra função, e quando determiando evento ocorrer esta função que você determinou será ativada, ela pode ser ativada uma ou várias outras vezes (tipo um IF, mas com mais possibilidades).

const fabricantes = ["Mercedes", "Audi", "BMW"] // Criando um array

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
// O forEach é uma função de "fabricantes" que vai executar um evento para cada elemento do array, por isso o nome CallBack. (Execute para entender melhor)
// O evento nesse caso é cada elemento encontrado no array.
fabricantes.forEach(imprimir)

fabricantes.forEach(function(a){
    console.log(a)
})