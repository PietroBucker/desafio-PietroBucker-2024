import { especies } from './Animais.js';

class savana {
    constructor(espaco, listaAnimal) {
        this.nome = 'savana';
        this.espaco = espaco;
        this.listaAnimal = listaAnimal;
    }
    getEspacoTotal() {
        return this.espaco;
    }
    getListaAnimal() {
        return this.listaAnimal;
    }
    getEspacolivre() {
        const result = this.listaAnimal
            .reduce((acc, animal) => acc + animal.getQuantidade()* animal.getTamanho(), 0);
        return this.espaco - result;
    }
    getEspacoOcupado(){
        const result = this.listaAnimal
            .reduce((acc, animal) => acc + animal.getQuantidade()* animal.getTamanho(), 0);
        return result;
    }
}

const teste = new savana(9, [new especies.LEAO(1)]);
// console.log(teste.getEspacoOcupado());



export const biomas = {
    savana,
}