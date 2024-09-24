let opcao1 = parseInt(prompt("Escreva qual serviço esta procurando no posto:" + 
    " \n1 = gasolina  \n2 = alcool  \n3 = calibrar os pneus"))
let gasolina = parseInt(5)
let alcool = parseInt(3)

    switch(opcao1){
        case 1:
         valor = (prompt("Qual o valor desejado?"))
            console.log("Você abasteceu " + valor / gasolina + " litros de gasolina")
        break
        case 2:
        valor = (prompt("Qual o valor desejado?"))
            console.log("Você abasteceu " + valor / alcool + " litros de alcool")
        break
        case 3:
            console.log("Pneus calibrados com sucesso")
        break
    }
    
