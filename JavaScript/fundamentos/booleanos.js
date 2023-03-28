let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Pode-se tambem representar os numero 0 e 1 para verdadeiro ou falso usando o !! = mostra a logica e ! = inverte a lógica

isAtivo = 0
console.log(!!isAtivo)
console.log(!isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')// Com espaço
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Qualquer outro valor a não ser 0 e menor q 0 vai dar verdadeiro

console.log("Os Falsos...")
console.log(!!0)
console.log(!!'')// Vazia
console.log(!!null)
console.log(!!NaN) // NaN = Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

// || significa "ou"

console.log('pra finalizar...') 
console.log(('' || null || 0 || 'teste')) // Retorna somente o primeiro valor verdadeiro
console.log(('' || null || 0 || '123'))
console.log(!!('' || null || 0 || ''))// Retorna se é verdadeiro ou falso

let nome = '' // Sem espaço para ser falso
console.log(nome || 'Desconhecido') // Se o Usuario não tiver preenchido (tornando verdadeiro) vai retornar como 'Desconhecido'

// Exemplo de caso o Usuario preencha o campo

let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido') 