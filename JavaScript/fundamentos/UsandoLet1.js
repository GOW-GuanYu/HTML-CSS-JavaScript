var numero = 1 

// variaveis VAR tem escopo global e escopo de função
// variaveis LET tem escopo global, escopo de função e escopo de bloco

{

    let numero = 2 // o let tem escopo de bloco, ou seja, ele só é visivel dentro do bloco em que ele está
    console.log('dentro =', numero) // aqui ele vai dar preferência ao escopo do bloco (let)

}
console.log('fora =', numero)

// como consequência, não haverá conflito entre as váriaveis 