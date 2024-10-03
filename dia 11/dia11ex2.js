let modelos = []
let anos = []
let valores = []
let condicao = true
let contador = 0

//criando loop
while(condicao){
   let carro = prompt("Digite o modelo do carro: ")
   let lancamento= parseInt(prompt("Digite o ano do carro: "))
   let valor = parseFloat(prompt("Digite o valor do carro: "))
    modelos[contador] = carro
    anos[contador] = lancamento
    valores[contador] = valor
    contador ++ 

    let resposta = prompt("Deseja continuar inserindo? s/n")

if(resposta == "n")
condicao = false
console.log("Encerrado")
}

//exibindo os carros
for(i = 0; i <modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

//ordenando pelos preços
for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){
            let modeloMaiorValor = modelo[j]
            modelos[j] = modelo[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            modelos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i + " - " + valores[i]])
}