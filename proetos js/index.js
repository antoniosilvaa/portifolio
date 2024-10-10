let num1 = parseInt(prompt("digite um numero"))
let num2 = parseInt(prompt("digite outro numero"))
let operadores = parseInt(prompt("escolha o operador" + "\n1 = +; \n2 = -; \n3 = *; \n4 = / " ))

switch(operadores){
    case 1:
        alert(num1 + "+" + num2 + "=" + (num1 + num2))
        break;
    case 2:
        alert(num1 + "-" + num2 + "=" + (num1 - num2))
        break;
    case 3: 
        alert(num1 + "*" + num2 + "=" + (num1 * num2))
        break;
    default:
        alert(num1 + "/" + num2 + "=" + (num1 / num2))
        break;

}
