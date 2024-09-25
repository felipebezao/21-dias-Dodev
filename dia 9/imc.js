let continuar;

do{
let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))
let imc = peso / (altura * altura)
let idade = Number(prompt("Escreva sua idade: "))
console.log(imc)

    
 

if (imc < 18.5) {
    console.log("Você é magro")
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Seu peso está normal")
} else if (imc > 24.9 && imc < 30) {
    console.log("Você está com sobrepeso")
} else if (imc > 30) {
    console.log("Você é obeso")
}

// descobrindo o ano que nasceu
let anoAtual = 2023
let nascimento = anoAtual - idade
console.log("Você nasceu no ano de " + nascimento)

//exibindo anos e idades
let anoVivido = nascimento
let idadeAtual = 0

for(let anoVivido = nascimento; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + "anos de idade") 
    idadeAtual++
}

continuar = prompt("Deseja inserir novos dados? (s/n)").toLowerCase();

}while (continuar != "n");
console.log("Programa encerrado!")


    


