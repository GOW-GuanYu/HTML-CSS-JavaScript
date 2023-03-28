let escola = "Cod3r"
console.log(escola.charAt(4))// Mostrar o 4(Quarto) Caractere.
console.log(escola.charAt(10))
console.log(escola.charCodeAt(3))// Imprime o codigo relacionado ao número 3 na tabela unicode relacionado ao HTML &#51;
console.log(escola.indexOf('3'))// Retorna o terceiro digito.

console.log(escola.substring(1))// Retorna todos os dados a partir do 1.
console.log(escola.substring(0, 3))// Retorna todos os dados a partir do 0 pulando apenas o terceiro dado.

console.log('Escola'.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))// Faz um replace do "3" pelo "e"
console.log(escola.replace(/\w/g,'e'))// Replace de todas as letras e digitos pela letra "e" //RegEX

console.log("Ana, Maria, Pedro".split(','))
console.log("Ana, Maria, Pedro".split(/,/))
console.log("Ana, Maria, Pedro".split('a'))