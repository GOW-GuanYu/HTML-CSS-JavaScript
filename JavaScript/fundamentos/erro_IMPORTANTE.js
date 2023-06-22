
// TÉCNICA DE TRATAMENTO JAVASCRIPT

function TratarErroELancar(erro){ //criando a função para tratar o erro.
    throw new Error('Ocorreu um erro de atribuição!')
    // "trow" serve para relançar o erro com uma nova mensagem, aqui eu posso adicionar strings, true or false, datas, hash, links, objetos, numeros, IDs e etc. 
    // o ideal aqui seria colocar uma mensagem genérica ou modos de como conseguir ajuda (links, hash, contato do suporte)
}
function imprimirNomeGritado(obj) {
    try{ //usar o try e catch quando se quiser tratar o erro.
    console.log(obj.name.toUpperCase() + '!!!')// colocando o objeto para caixa alta e adicionando o "!!!" no final da frase.
    } catch (e) { //o catch vai tratar o erro com os paramêtros definidos a ele anteriormente.
        TratarErroELancar(e) // lançando a função criada para tratar o erro.
    } finally { //o finally sempre será executado, independente de erro ou não.
        console.log('final')
    }
}
const obj = { nome: 'Roberto'} //aqui está o erro, o certo seria "name" como antes definido no código.
imprimirNomeGritado(obj)