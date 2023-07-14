
// ENTENDENDO A FUNÇÃO ARROW. 
let dobro = function (a){
    a * 2
}

dobro = (a) =>{
    return 2 * a // quando o bloco "{}" é colocado, se é obrigatório a utilização do "return".
}

dobro = a => 2 * a // return implicito.
console.log(dobro(Math.PI)) // só estou atribuindo o falor de "a" q no caso vai ser PI.

let ola = function (){
    return "Olá"
}

ola = () => {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro no qual pode ser ignorado, se vc quiser.
console.log(ola())