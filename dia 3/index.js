let nomeDoUsuario = ""
let idadeDoUsuario = 0
let alturaDoUsuario = 0
let pesoDoUsuario = 0

console.log("Ola mundo")
let nomeDoUsuario = prompt("Escreva seu nome")
console.log(nomeDoUsuario)
let idadeDoUsuario = parseInt(prompt("Escreva sua idade"))
console.log(idadeDoUsuario)
let alturaDoUsuario = parseInt(prompt("Escreva sua altura"))
console.log(alturaDoUsuario)
let pesoDoUsuario = parseInt(prompt("Escreva seu peso"))
console.log(pesoDoUsuario)

let anoDeNascimento =  2023 - (idadeDoUsuario) 
console.log("O seu ano de nascimento é:" + anoDeNascimento) 

let imcDoUsuario = 0
imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario)
console.log(imcDoUsuario)


