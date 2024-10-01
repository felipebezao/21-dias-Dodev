const array = []
const indice = []
let contador = 0

const numeroProcurado = parseInt (prompt("Digite o número a ser procurado: "))

for (let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
    array[i] = elemento
}

for(let i = 0; i < 10; i++) {
    if(array[i] === numeroProcurado){
        indice[contador] = i
        contador++
    }
}
console.log(`O numero ${numeroProcurado} foi encontrado nos índices: ${indice}`);
 
//ex 2


