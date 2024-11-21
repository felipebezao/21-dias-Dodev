var nome
var salario

function nomeSalario(){
     nome = prompt("Digite o nome do colaborador: ");
     salario = prompt("Digite o salário do colaborador: ");
    calcularAumentoSalario(nome, salario);
}

function calcularAumentoSalario(nome,salario){
    var aumento = 0
    if(salario <= 1500){
        aumento = 0.2
    }
    else if(salario <= 2000){
        aumento = 0.15
    }
    
    else if(salario <= 3000){
        aumento = 0.10
    }
    
    else{
        aumento = 0.05
    }

    let novoSalario = salario + (salario * aumento);

    console.log("Nome do colaborador: " + nome)
    console.log("O seu salário é: " + salario)
    console.log("O seu aumento será de: " + aumento)
    console.log("O seu novo salário será de: " + novoSalario)
}