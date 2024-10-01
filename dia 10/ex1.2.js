let array = []
let arrayInvertido = []
let outroArray = []
outroArray = [parseInt(prompt("Quantos números você deseja inserir no array?"))]

for(let i = 0; i < outroArray; i++) {
    let numero = parseInt(prompt("Digite o" + (i + 1) + "º número"))
    array[i] = numero 
}
console.log("Array original: " + array)
//
let contador = outroArray - 1
for(let i = 0; i < outroArray; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}
console.log("Array invertido: " + arrayInvertido)