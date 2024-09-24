let saldoInicial = 1000;
let maiorValorInserido = 0;
let somaValoresInserido = 0;
let totalTransacoes = 0;
let continuar = false

do {
    const nome = prompt("Escreva seu nome: ");
    const cpf = prompt("Escreva seu CPF: ");
    const valor = Number(prompt("Insira um valor desejado: "));
     opcao = (prompt("Deseja sacar ou depositar? s|d"));

    if (valor < 0) {
    console.log("Valor inválido. Transação não realizada.")
    } else if (opcao == "s" & valor > saldoInicial) {
       console.log("Saldo insuficiente. Transação nao realizada.") 
    } else if (opcao == "s"){
        console.log("Olá, " + nome + ", " + cpf + ", seu saldo atual é de: " + saldoInicial);
        saldoInicial -= valor;
        totalTransacoes++;
        somaValoresInserido += valor;
        if (valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é R$" + saldoInicial + ".");
    }  else {
        console.log("Olá, " + nome + ", " + cpf + ", seu saldo atual é de: " + saldoInicial)
        saldoInicial += valor;
        totalTransacoes++;
        somaValoresInserido += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        } 
        console.log("Transação realizada com sucesso. Seu saldo atual é R$" + saldoInicial)
    }
     opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar): ");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2"){
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado");
        continuar = false
    }
}
    while (continuar)
    
    console.log("Saldo final: R$" + saldoInicial);
    console.log("Maior valor inserido: R$" + maiorValorInserido);
    console.log("Média dos valores inseridos: R$" + (somaValoresInserido / totalTransacoes));

 