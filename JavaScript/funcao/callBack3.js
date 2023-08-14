// Exemplo de callback no browser (coloque no console do browser)
document.getElementsByTagName('body')[0].onclick = function(f){  /// atribuindo uma função ao click do elemento "body" 
    // o [0] representa o primeiro indice/elemento, vc precisa acessar o elemento especifico para a função...funcionar
    console.log('O evento ocorreu!')
}