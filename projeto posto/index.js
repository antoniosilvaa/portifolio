let gasolina
let alcool
let calibrar
let opcoes = parseInt(prompt("o que voce deseja" + "\n1 = gasolina; \n2 = alcool; \n3 = calibrar"))

switch (opcoes) {
    case 1: 
   gasolina = parseFloat(prompt("digite o valor"))
    alert( " igual a =" + gasolina / 5.69 + " litros")
        break;
    case 2: 
   alcool = parseFloat(prompt("digite o valor"))
   alert( " igual a =" + alcool / 3 + " litros")
        break;

    default:
        calibrar = alert("pneus calibrados")
}
    


