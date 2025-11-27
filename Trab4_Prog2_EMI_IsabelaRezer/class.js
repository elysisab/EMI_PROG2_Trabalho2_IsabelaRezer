class EntidadeBase {
    constructor (nome, desc){
        this.nome = nome;
        this.desc = desc;
    }

    toString() {
        return `${this.nome}`;
    }

    exibirDados() {
        return `${this.nome} (${this.desc})`;
    }
}

class Personagem extends EntidadeBase {
    constructor (nome, desc, elemento, caminho, nivel, faccao, raca){
        super(nome, desc);
        this.elemento = elemento;
        this.caminho = caminho;
        this.nivel = nivel;
        this.faccao = faccao;
        this.raca = raca;
    }

    toString() {
        return `${super.toString()} - ${this.caminho} | ${this.elemento} - ${this.nivel}`;
    }

    exibirDados() {
        return `${super.exibirDados()} - Elemento: ${this.elemento} | Caminho: ${this.caminho} - Nível: ${this.nivel} - Facção: ${this.faccao} | Raça: ${this.raca}`;
    }
}