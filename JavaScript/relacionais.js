console.log('01)', '1' == 1) // '1' é igual a 1? sim, a string '1' é igual ao valor 1 (não estamos comparando tipos com o "==").
console.log('02)', '1' ===1) // '1' é estritamente igual a 1? não, pois aqui ele esta comparando os tipos (===) e '1' é uma string.
console.log('03)', '3' !=3) // '3' é diferente de 3? não, pois não estamos comparando tipos, e '3' é igual ao valor 3
console.log('04)', '4' !==3) // '3' é estritamente diferente de 3? sim, pois estamos comparando tipos.

// Auto explicativo
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)
//

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2) // não entedi essa parte da explicação, tem a ver com endereço de memoria, por isto falso
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // mesmo tipo e mesmo valor 
console.log('12)', d1.getTime() == d2.getTime()) // mesmo valor e mesmo valor

console.log('13)', undefined == null)
console.log('14)', undefined === null) // tipos diferentes