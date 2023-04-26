// por isso é sempre importante começar declarando as váriaveis
console.log('a =', a)
var a = 2
console.log('a =', a)

// mesmo exemplo de cima em uma function, apresenta o mesmo resultado
function teste(){
    console.log('b =', b)
    var b = 2
    console.log('b =', b)
}
teste()

function teste2(){
    // console.log('c =', c) vai dar erro pois não foi declarado antes de chamar
    let c = 3
    console.log('c =', c)
}
teste2()