let arrayAlunos = []
let arrayNotas = []
let continuar = true
let contador = 0

//criando loop
while(continuar){
let nome = [prompt("Digite o nome do " + (contador + 1) + "° aluno")]
let nota = [parseInt(prompt("Digite a nota do aluno: "))]
arrayAlunos[contador] = nome
arrayNotas[contador] = nota
contador++

let resposta = prompt("Deseja continuar inserindo? s/n")

if(resposta == "n")
continuar = false
console.log("Encerrado")
}

//exibindo as notas
console.log("Exibindo notas dos alunos: ")
for(i = 0; i < arrayAlunos.length; i++){
    console.log(arrayAlunos[i] + " - " + arrayNotas[i])
}
let somaNotas = 0
for(i = 0; i < arrayNotas.length; i++){
    somaNotas += arrayNotas[i]
}
let media = somaNotas / arrayAlunos.length
console.log("A soma das notas foi: " + somaNotas)
console.log("A média geral da turma foi: " + media)