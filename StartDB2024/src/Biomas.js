import { especies } from './Animais.js';
class bioma {
    constructor(espaco, listaAnimal) {
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
class savana extends bioma {
   constructor(espaco, listaAnimal) {
         super(espaco, listaAnimal);
         this.nome = 'savana';
    }
}

class floresta extends bioma {
    constructor(espaco, listaAnimal) {
          super(espaco, listaAnimal);
          this.nome = 'floresta';
     }
 }

 class savanaRio extends bioma {
    constructor(espaco, listaAnimal) {
          super(espaco, listaAnimal);
          this.nome = 'savana e rio';
     }
 }

 class rio extends bioma {
    constructor(espaco, listaAnimal) {
          super(espaco, listaAnimal);
          this.nome = 'rio';
     }
 }
const teste = new savana(9, [new especies.LEAO(1)]);
// console.log(teste.getEspacoOcupado());



export const biomas = {
    savana,
    floresta,
    savanaRio,
    rio,

}