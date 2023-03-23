console.log("Olá, Mundo!")


// Declarando Variáveis  
// Let = Forma mais usual de criar uma variável

let preco = 10;
let desconto = 0.2;

// Descontos

var total0 = (preco * (desconto));// Desconto de 80%
var total1 = (preco * (1- desconto));// Desconto de 20%

var total2 = (10 * 0.8); // Desconto de 20%
var total3 = (10 * 0.2);// Desconto de 80%

let nome = "Caderno"; // String (texto) -> Sequência de letras/simbolos
let categoria = "Papelaria";

// Mostrando Resultados
console.log(total0);
console.log(total1);
console.log(total2);
console.log(total3);


console.log(nome + categoria);

console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Preco com Desconto de 20%: " + total1   
    );

//exemplo de impressão de stings (texto)

console.log(1+1)// Não é String
console.log("1"+"1");// String
