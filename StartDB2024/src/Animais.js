class Animal {
    constructor(especie, quantidade) {
        this.quantidade = quantidade; 
        this.especie = especie;
        this.bioma = [];
        this.tamanho = 0;
        this.carnivoro = false;
    }

    getBioma() {
        return this.bioma;
    }
    getTamanho() {
        return this.tamanho;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getCarnivoro() {
        return this.carnivoro;
    }
    getEspecie() {
        return this.especie;
    }
}

class LEAO extends Animal {
    constructor(quantidade) {
        super('LEAO', quantidade,);
        this.bioma = ['savana'];
        this.tamanho = 3;
        this.carnivoro = true;
    }
}

class HIPOPOTAMO extends Animal {
    constructor(quantidade) {
        super('HIPOPOTAMO', quantidade,);
        this.bioma = ['savana', 'rio'];
        this.tamanho = 4;
        this.carnivoro = false;
    }
}

class MACACO extends Animal {
    constructor(quantidade) {
        super('MACACO', quantidade,);
        this.bioma = ['savana', 'floresta'];
        this.tamanho = 1;
        this.carnivoro = false;
    }
}

export const especies = {
    LEAO,
    HIPOPOTAMO,
    MACACO
}


