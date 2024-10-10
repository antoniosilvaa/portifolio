let nome = prompt("Qual seu nome??")
let idade = parseInt(prompt("voce tem quantos anos??"))
let habl = prompt("voce possui carteira de motorista?? (sim//nao)")
let carro = prompt("voce tem carro? (sim//nao)")

if ( idade < 18 && habl === "nao" ){
    alert(nome +" nao tem carteira, nao tem idade e dirigindo?? ta preso safado!!");
} else if (idade >= 18 && habl === "sim" && carro === "nao" ){
    alert(nome + " hahaha tem carta mas nao tem carro?? vai de mercedes pro trabalho pega o busao");
} else if (idade >= 18 && habl === "nao" && carro === "nao" ){
    alert(nome + " é meu chapa trabalhar que voce conquista");
}else {
    (idade >= 18 && habl === "sim" && carro === "sim")
    alert(nome + " parabens meu chapa agora trabalha pra por gasolina");
}