//um objeto é uma coleção de chaves e valores

const prod1 = {}          // Par de chaves {} representa o objeto
prod1.nome = 'Celular Ultra Mega' // O "nome" foi criado dinamicamente dentro do objeto 
prod1.preco = 4999.90
prod1['Desconto Legal'] = 0.40 // Usei colchetes só para diferenciar // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco:  79.90,

}
console.log(prod2)

    // Json(JavaScript Object Notation é um forma textual e não de objeto (usado para trocar dados entre sistemas)

const prod3 = {

    nome: 'Camisa Polo',
    preco:  79.90,

                //Aqui estou mostrando que posso criar outros objetos dentro
        obj: {
            blabla: 1,

            obj: {
                blah: 2

            }

        }

}

