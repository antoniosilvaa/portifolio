const fome = prompt("voce esta com fome?? sim//nao")
const dinheiro = prompt("voce tem dinheiro?? sim//nao")
const restaurante = prompt("o seu restaurante favorito esta aberto?? sim//nao")

if (fome === "nao" || dinheiro === "nao") {
        alert("hoje a janta sera em casa");
} else if (fome === "sim" && dinheiro === "nao" && restaurante === "sim"){
    alert("infelizmente a janta sera em casa");
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    alert(' se prepare que hoje o a janta sera no melhor restaurante da cidade');
}   else{
    alert("peça um delivery");
}
    