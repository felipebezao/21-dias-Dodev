let nomes = []
let senhas = []
let continuar = true


function solicitarOpcao(){
 let opcao = prompt("Escolha qual ação deseja realizar: \n1 . Cadastrar\n2 . Logar\n3 . Excluir\n4 . Encerrar programa")
 return opcao;
}

//funcao de cadastro

function solicitarCadastro(){
    nomes.push(prompt("Digite um nome de usuario para cadastro: "))
    senhas.push(prompt("Digite uma senha para seu cadastro: "))
}

//funcao de login

function solicitarLogin(nome, senha){
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] == senha){
        return true
    } else {
        return false
    }
    
}

//funcao de exclusao de cadastro

function solicitarExclusao(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
            console.log("Cadastro excluído com sucesso");
        
    }
    else {
        console.log("Usuario nao encontrado")
    }    
    }

    //funcionamento do fluxo 

    while(continuar){
        let opcao = solicitarOpcao();
        switch(opcao){
            case "1":
                solicitarCadastro();
              break
            case "2":
                let nome = prompt("Escreva o nome de login: ")
                let senha = prompt("Escreva a sua senha: ")
                let login = solicitarLogin(nome, senha);
                if(login){
                    console.log("Logado com sucesso.")
                } else {
                    console.log("Nome ou senha estão incorretos.")
                }
              break
            case "3":
                let nomeExcluir = prompt("Escreva o nome de usuario que deseja excluir: ")
                solicitarExclusao(nomeExcluir);
              break
            case "4":
                continuar = false;
              break;
            default:
                console.log("Opção inválida, tente novamente.")
              break

        }
    }