class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
        constructor(nome, potencia, velocidadeMaxima, aceleracao){
            this.Nome = nome
            this.Potencia = potencia
            this.VelocidadeMaxima = velocidadeMaxima
            this.Aceleracao = aceleracao
        }   
       CalcularTempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
       }
}
class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

        constructor(nome, tipo, distancia){
            this.Nome = nome
            this.Tipo = tipo
            this.Distancia = distancia
            this.Participantes = []
            this.Vencedor = ""
        }
        DefinirVencedor(){
            let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
            let vencedor = this.Participantes[0]
            
            for(let index = 1; index <this.Participantes.length; index++) {
                let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
                if(tempo < menorTempo){
                    menorTempo = tempo
                    vencedor = this.Participantes[index]
                }
            }
            return this.vencedor = vencedor
        }
            
        ExibirVencedor(){
            alert("O vencedor é: " + this.Vencedor.Nome)
        }
        
    }
