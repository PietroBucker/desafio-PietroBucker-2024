import zoo from './zoo.js';
import { especies } from './Animais.js';
import { biomas } from './Biomas.js';



class RecintosZoo {
    // zoo = zoo;
    inicializaZoo = [
        new biomas.savana(10, [new especies.MACACO(3)]),
        new biomas.floresta(7, []),
        new biomas.savanaRio(7, [new especies.GAZELA(1)]),
        new biomas.rio(8, []),
        new biomas.savana(9, [new especies.LEAO(1)]),


    ];
    listaPermitidos = ['MACACO', 'LEAO', 'HIPOPOTAMO', 'GAZELA', 'LEOPARDO', 'CROCODILO'];
    biomaOrder = {
        'savana': 1,
        'floresta': 2,
        'savana e rio': 3,
        'rio': 4,
        'savana2': 5
    }

    biomasAnimais = {
        'MACACO': ['savana', 'floresta', 'savana e rio'],
        'LEAO': ['savana', 'savana e rio'],
        'HIPOPOTAMO': ['savana', 'rio', 'savana e rio'],
        'GAZELA': ['savana', 'savana e rio'],
        'LEOPARDO': ['savana', 'savana e rio'],
        'CROCODILO': ['rio', 'savana e rio']
    };
    analisaRecintos(animal, quantidade) {
        if (!this.listaPermitidos.includes(animal)) return {
            erro: "Animal inválido",
            recintosViaveis: false
        };
        if (quantidade <= 0) return {
            erro: "Quantidade inválida",
            recintosViaveis: false
        };

        const novoAnimal = new especies[animal](quantidade);

        if (this.verificaEspacoDisponivel(novoAnimal)) return {
            erro: "Não há recinto viável",
            recintosViaveis: false
        };

        if (animal === 'MACACO') {
            return {
                erro: false,
                recintosViaveis: this.inicializaZoo
                    .filter((recinto) => recinto.nome === 'savana' || recinto.nome === 'floresta' || recinto.nome === 'savana e rio' && recinto.listaAnimal.length === 0)
                    .map((recinto, ind) => {
                    return `Recinto ${this.biomaOrder[recinto.nome]} (espaço livre: ${recinto.getEspacoTotal() - novoAnimal.getTamanho() * quantidade} total: ${recinto.getEspacoTotal()})`;

                })

            };
        }
        if (animal === 'CROCODILO') {
            console.log(this.inicializaZoo.indexOf('rio'));

            return {
                erro: false,
                recintosViaveis: this.inicializaZoo
                    .filter((recinto) => recinto.nome === 'rio' || recinto.nome === 'savana e rio' && recinto.listaAnimal.length === 0)
                    .map((recinto, ind) => {
                    return `Recinto ${this.biomaOrder[recinto.nome]} (espaço livre: ${recinto.getEspacoTotal() - novoAnimal.getTamanho() * quantidade} total: ${recinto.getEspacoTotal()})`;

                })

            };
        }

    }

    verificaEspacoDisponivel(novoAnimal) {
        return this.inicializaZoo
            .every((recinto) => recinto.getEspacoOcupado() + (novoAnimal.getTamanho() * novoAnimal.getQuantidade()) > recinto.getEspacoTotal());
    }


}

export { RecintosZoo as RecintosZoo };

// const testandoClasse = new RecintosZoo().analisaRecintos('LEAO', 1);
const testandoClasse2 = new RecintosZoo().analisaRecintos('CROCODILO', 1);