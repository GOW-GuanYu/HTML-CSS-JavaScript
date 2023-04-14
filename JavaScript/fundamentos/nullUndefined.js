let valor //não definidoS
console.log(valor)

valor = null    // ausência de valor, ou seja, não aponta pra nenhum lugar da memoria
console.log(valor)

const produto = {}          // lembrando que {} significa objeto
console.log(produto.preco)
console.log(produto)

produto.preco = 3.56
console.log(produto)
console.log(typeof produto)

// delete produto.preco

produto.preco = null // preço não definido (Optar pelo nulo em vez do undefined)