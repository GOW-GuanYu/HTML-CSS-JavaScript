const funcs = [] // array vazio

for(let i = 0; i < 10; i++){

   funcs.push(function() { //adicionando novo function(){} ao array 
        console.log(i)
    }) 

}

//adicionando quais são os novos elementos adicionados
funcs[2]()
funcs[8]()