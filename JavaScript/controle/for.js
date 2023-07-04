let contador = 1
while(contador <=10){
    console.log(`contador = ${contador}`)// achoq  tenho q colocar o `` somente quando eu quero q uma expreção apareça.
    contador++
}

for(let i = 1;i <= 10; i++){ // sintaxe do "for" no javascript, bem parecida com o C++ e o Java.
    console.log(`i = ${i}`)
}

const notas =[6.7, 7.4, 9.8, 8.1, 7.7] //navegando pelo array com o for.
for(let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
}