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
        this.bioma = ['savana', 'rio', 'savana e rio'];
        this.tamanho = 4;
        this.carnivoro = false;
    }
}

class MACACO extends Animal {
    constructor(quantidade) {
        super('MACACO', quantidade,);
        this.bioma = ['savana', 'floresta', 'savana e rio'];
        this.tamanho = 1;
        this.carnivoro = false;
    }
}

class GAZELA extends Animal {
    constructor(quantidade) {
        super('GAZELA', quantidade,);
        this.bioma = ['savana', 'savana e rio'];
        this.tamanho = 2;
        this.carnivoro = false;
    }
}

class CROCODILO extends Animal {
    constructor(quantidade) {
        super('CROCODILO', quantidade,);
        this.bioma = ['rio', 'savana e rio'];
        this.tamanho = 3;
        this.carnivoro = true;
    }
}

class LEOPARDO extends Animal {
    constructor(quantidade) {
        super('LEOPARDO', quantidade,);
        this.bioma = ['rio', 'savana e rio'];
        this.tamanho = 2;
        this.carnivoro = true;
    }
}

export const especies = {
    LEAO,
    HIPOPOTAMO,
    MACACO,
    GAZELA,
    CROCODILO,
    LEOPARDO
}


