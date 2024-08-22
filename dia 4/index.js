//exercicio para treino

let fome = (prompt("Você está com fome?"))
let dinheiro = (prompt ("Você tem dinheiro?"))
let restaurante = (prompt("O restaurante está aberto?"))


if(fome === "Nao" || dinheiro === "Nao")  {
    console.log("Hoje a janta sera em casa!")
}
if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Nao"){
    console.log("Peça um delivery")
}
if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
}