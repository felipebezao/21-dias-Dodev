class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
        constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
            this.tipo = tipo
            this.processador = processador
            this.video = video
            this.armazenamento = armazenamento
            this.memoriaRam = memoriaRam
            this.ssd = ssd
        }

}

let computador = new Computador("Desktop", "Ryzen 5", "rx 580", "1TB", "32 GB", "240 GB")

