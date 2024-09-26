let continuar 
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let salario = parseFloat(prompt("Digite seu salario")) 
do{
console.log("Olá " + nome + ", você tem " + idade + " anos, e tem o salário de R$" + salario)
continuar = prompt("As informações mostradas estão corretas? (s/n)")

} while(continuar != "s")
    console.log("prosseguindo")

//PREVISAO DO SALARIO
let aumentoSalarial = 0.015
console.log("Previsão salarial para os próximos 10 anos: ")

for(let ano = 1; ano <= 10; ano++){
    salario += salario * aumentoSalarial
    aumentoSalarial *= 2

    console.log((2023 + ano) + " = R$ " + salario)
}