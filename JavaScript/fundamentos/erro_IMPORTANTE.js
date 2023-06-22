
// TÉCNICA DE TRATAMENTO JAVASCRIPT

function TratarErroELancar(erro){
    throw new Error('Ocorreu um erro!')//quando aparecer um erro isso irá aparecer, aqui eu posso adicionar strings, true or false, datas, hash, links, objetos e etc.
}
function imprimirNomeGritado(obj) {
    try{ //usar o try e catch quando se quiser tratar o erro.
    console.log(obj.name.toUpperCase() + '!!!')// colocando o objeto para caixa alta e adicionando o "!!!" no final da frase.
    } catch (e) { //o catch vai tratar o erro com os paramêtros definidos a ele anteriormente.
        TratarErroELancar(e)
    } finally { //o finally sempre será executado, independente de erro ou não.
        console.log('final')
    }
}
const obj = { nome: 'Roberto'} //aqui está o erro, o certo seria "name" como antes definido no código.
imprimirNomeGritado(obj)