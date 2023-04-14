const valores = [8.7, 9.9, 6.3, 5.5]// variável escrita de forma genérica (ruim)
console.log(valores[0], valores[3])
console.log(valores[4]) //como não existe o valores na posição [4] ele vai dar como undefined

valores [4] = 10
console.log(valores[4])
console.log(valores)

valores [15] = 20
console.log(valores)
console.log(valores.length) // imprime o tamanho do array

valores.push({id: 3}, false, null, 'teste') // misturar coisas dentro um array não é uma boa prática, é importante ter valores homogêneos
console.log(valores)

console.log(valores.pop())// pega o último valor do array e retorna ele

delete valores[0] // autoexplicativo 
console.log(valores)

console.log(typeof valores) //um array é do tipo object