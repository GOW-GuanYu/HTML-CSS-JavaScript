const nome = 'rebeca'
const concatenacao= 'Olá' + nome + '!'
console.log(concatenacao)

const template = `
    Olá
    ${nome}!` // Usar o BackTick (acento grave) para abrir e fechar


    console.log(concatenacao, template)

    // Expressões
    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    
    console.log(`Ei...${up('Cuidado')}!`) //Usando de novo o $(Cifrão) e o Acento Grave //Este up('') é pra colocar a String em Uppercase(Maiúsculo)
