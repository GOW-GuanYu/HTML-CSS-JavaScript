// Adicionando o Valor padrão conforme o es2015 (Método mais rápido e simples), sempre q puder escolha o recurso mais atualizado da linguagem.
function soma1(a =1, b = 1, c = 1){
    return a + b + c
}
console.log(soma1(1), soma1(1,2), soma1(1,2,3), soma1(0,0,0))