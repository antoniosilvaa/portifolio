//declarando as variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

// iniciando os prompts de comando

nome = prompt("digite seu nome")
idade = parseInt(prompt("digite sua idade"))
altura = parseFloat(prompt("digite sua altura"))
peso = parseInt(prompt("digite seu peso"))

// fazendo a logica do programa

let anoNasc 
anoNasc = 2024 - idade

let imc
imc = peso / (altura*altura)

// disparando um alerta com todas as funcionalidades

alert("olá "+ nome + " voce tem, " + idade + " anos, nasceu em " + anoNasc + " tem " + altura + " de altura, " + "pesa " + peso + "kg, seu imc é " + imc + "kg/m2" )