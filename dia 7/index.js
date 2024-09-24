//variaveis 
let mediageral = 0
let homensnotas = 0
let mulheresmais7 = 0
let maiornotahomens = 0
let contador = 1

//nota, sexo
while(contador <= 10){
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
    sexo = (prompt("Digete o sexo do aluno: m/f"))

    if(sexo == "m"){
        if (nota > maiornotahomens) {
            maiornotahomens = nota
        }
        homensnotas++
    }

    if(sexo == "f" & nota > 7){
         mulheresmais7++
        }
    
    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log("A média geral dos alunos foi: " + mediageral)
console.log("A quantidade de homens cadastrados foi: " + homensnotas)
console.log("O numero de mulheres que tiraram mais que 7 foi: " + mulheresmais7)
console.log("A maior nota entre os homens foi: " + maiornotahomens)