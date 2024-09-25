//variaveis
let nome = (prompt("Escreva seu nome: "))
let idade = (prompt("Escreva sua idade: "))
let peso = (prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))
let profissao = (prompt("Digite sua profissão: "))

if (idade >= 18) {
    console.log("Você está liberado para tomar uma gelada.")
}else { 
    console.log("Sem gelada pra você.")
}

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "kg")

//IDADE EM DIAS, MESES E SEMANAS

let dias = idade * 365
let meses = idade * 12
let semanas = idade * 7

console.log("Sua idade em dias é: " + dias)
console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
