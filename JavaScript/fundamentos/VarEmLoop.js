const funcs = [] // array vazio

for(var i = 0; i < 10; i++){

   funcs.push(function() { //adicionando novo funcion(){} ao array 
        console.log(i)
    }) 

}
funcs[2]()
funcs[8]()