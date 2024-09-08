import zoo from './zoo.js';
import { especies } from './Animais.js';
import { biomas } from './Biomas.js';

class RecintosZoo {
    zoo = zoo;
    listaPermitidos = ['MACACO', 'LEAO', 'HIPOPOTAMO', 'GAZELA', 'LEOPARDO', 'CROCODILO'];
    tamanhoAnimais = {
        'MACACO': 1,
        'LEAO': 3,
        'HIPOPOTAMO': 4,
        'GAZELA': 2,
        'LEOPARDO': 2,
        'CROCODILO': 3
    };
    biomasAnimais = {
        'MACACO': ['savana', 'floresta'],
        'LEAO': ['savana'],
        'HIPOPOTAMO': ['savana', 'rio'],
        'GAZELA': ['savana'],
        'LEOPARDO': ['savana'],
        'CROCODILO': ['rio']
    };
    analisaRecintos(animal, quantidade) {
        if (!this.listaPermitidos.includes(animal)) {
            return { erro: "Animal inválido", recintosViaveis: false };
        }
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: false };
        }

        const atual = this.dadosAtuais();
        // console.log(atual);
        const filtro = atual.filter((recinto) => recinto.bioma);
        console.log(filtro);

        // const filtro1 = filtro.filter((recinto) => this.biomasAnimais[animal].some((bioma) => recinto.bioma.includes(bioma)));
        // const teste = atual.filter((recinto) => (recinto.total - recinto.livre + (quantidade * this.tamanhoAnimais[animal])) <= recinto.total);
        // console.log(filtro1);





    }
    encontraBioma(animal) {
        //filtro:
        //bioma do anuima
        //espaço suficiente
        //se é carnivoro tem que estar com a mesma especie
        //hipopotamo so fica confortavel em recinto com savana e rio
        //macaco precisa de outra especie junto para ficar confortavel
        //mais de uma especie no recinto considerar 1 espaço extra
        //lotes de animais nao podem ser separados
    }
    dadosAtuais() {

        return this.zoo.recintos.filter(({animais}) => animais.some(({especie}) => especie !== ''))
        .map((recinto) => {
            return {
                bioma: recinto.bioma,
                total: recinto.tamanhoTotal,
                livre: recinto.tamanhoTotal - recinto.animais
                    .reduce((acc, animal) => acc + this.tamanhoAnimais[animal.especie] * animal.quantidade, 0),
            };
        })

    }

}

export { RecintosZoo as RecintosZoo };

// const testandoClasse = new RecintosZoo().analisaRecintos('LEAO', 1);
new biomas.savana(10, [new especies.MACACO(3)])
new biomas.savana(9, [new especies.LEAO(1)])
const testandoClasse2 = new RecintosZoo().analisaRecintos('MACACO', 2);