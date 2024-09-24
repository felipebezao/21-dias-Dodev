let numero1 = parseInt(prompt("Escreva um numero"))
let numero2 = parseInt(prompt("Escreva outro numero"))
let operacao = parseInt(prompt("Escreva qual operacao deseja fazer entre os dois numeros:" +
    "\n1 = + \n2 = - \n3 = * \n4 = /"))
    
switch(operacao){
    case 1:
        console.log("voce escolheu a opçao 1")
        console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
    break;
    case 2:
        console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
    break    
    case 3:
        console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2))
    break
    default:
        console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2))
    break    
}  
    