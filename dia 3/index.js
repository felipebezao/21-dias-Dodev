let usuario = ""
let idade = 0
let altura = 0
let peso = 0

usuario = prompt("Escreva seu nome")
console.log(usuario)
idade = parseInt(prompt("Escreva sua idade"))
console.log(idade)
altura = parseFloat(prompt("Escreva sua altura"))
console.log(altura)
peso = parseInt(prompt("Escreva seu peso"))
console.log(peso)

let anoDeNascimento =  2023 - (idade) 
console.log("O seu ano de nascimento é:" + anoDeNascimento) 

let imc = 0
imc = peso / (altura * altura)
console.log(imc)

console.log("Olá " + usuario + " você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " +
    altura + " de altura, pesa " + peso + "kg e seu IMC é de " + imc + "kg/m2")

// ------ Certo


