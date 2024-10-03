let nomes = []
let senhas = []
let continuar = true
let contador = 0

//
let opcao = prompt("Selecione a opção desejada: /1- CADASTRAR /2- LOGIN /3- EXCLUIR /4- ENCERRAR")
while(continuar){
    switch(opcao){
        case 1:
            nomes[contador] = prompt("Insira um nome de usuario:")
            senhas[contador] = prompt("Insirua uma senha:")
            contador++
        break;
        
        case 2:
            let nome = prompt("Insira o seu login:")
            let senha = prompt("Insira sua senha:")
            let loginValido = false

            for(let i = 0; i < nomes.length; i++){
             if(nome == nomes[i] && senha == senhas[i]){
                loginValido = true
              }  
            }
             if(loginValido){
                alert("Login feito com sucesso. Bem- vindo!")
            }else{
                alert("Login ou senha incorretos!")
            }
            break;
        
        case 3:
            let nomeExcluir = prompt("Insira o usuario que deseja excluir")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = []

            for(let i = 0; i < contadorAux; i++){
                if(nomeExcluir == nomes[i]){
                    alert("Cadastro excluido com sucesso")
                } else{
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
           nomes = nomesAux
            senhas = senhasAux
            contador--
            break;

        case 4:
            continuar = false
            alert("Encerrado")
            break;
        default:
            console.log("Opcao inválida, selecione outra!")
    }

}