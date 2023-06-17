let num1 = 1
let num2 = 2

num1++ //acrescenta um valor à mais para a unidade, se a unidade for 1 agora ela será 2 
console.log(num1)
--num1 // subtrai 1 do valor da unidade
console.log(num1)

// é importante ressaltar sobre a prioridade entre os parâmetros unários, se ele for escrito "++num1" ele terá prioridade sobre aqueles que estiverem escritos como "num1++ ou num1--" da mesma forma acontece com aqueles que estiverem escrito "--num1"