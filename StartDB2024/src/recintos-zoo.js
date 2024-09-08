import zoo from './zoo.js';
const { recintos, animalInfo } = zoo;




class RecintosZoo {
    analisaRecintos(animal, quantidade) {
        if (Object.keys(animalInfo).includes(animal) === false) {
            return {
                erro: "Animal inválido",
                recintosViaveis: false
            };
        }
        if (quantidade <= 0) {
            return {
                erro: "Quantidade inválida",
                recintosViaveis: false
            };
        }

        if (!recintos.some((recinto) => this.verificaEspacoDisponivel(recinto, animal, quantidade))) {
            return {
                erro: "Não há recinto viável",
                recintosViaveis: false
            };
        }


        if (animal === 'MACACO') {
            if (quantidade === 1) {
                const recintoFiltrados = recintos
                    .filter((recinto) => recinto.animais.length !== 0 && this.coparaAnimaisCarnivoros(recinto))
                    .map((recinto) => {
                        return {
                            ...recinto,
                            extra: recinto.animais.every(({ especie }) => especie !== animal)
                            && recinto.animais.length !== 0
                        };
                    });
                    console.log('recintoFiltrados', recintoFiltrados);
                    
                return {
                    erro: false,
                    recintosViaveis: this.geralista(recintoFiltrados, animal, quantidade)
                };
            } else {

                const recintoFiltrados = recintos
                    .filter((recinto) => this.verificaEspacoDisponivel(recinto, animal, quantidade)
                        && this.coparaAnimaisCarnivoros(recinto)
                        && this.verificaBioma(recinto, animal))
                    .map((recinto) => {
                        return {
                            ...recinto,
                            extra: recinto.animais.every(({ especie }) => especie !== animal) 
                            && recinto.animais.length !== 0
                        };
                    });;
                return {
                    erro: false,
                    recintosViaveis: this.geralista(recintoFiltrados, animal, quantidade)
                };
            }

        }

        if (animal === 'LEAO' || animal === 'LEOPARDO' || animal === 'CROCODILO') {
            const recintoFiltrados = recintos
                .filter((recinto) => this.verificaBioma(recinto, animal)
                    && recinto.animais.every(({ especie }) => especie === animal))
            if (recintoFiltrados.length === 0) {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: false
                };
            }
            return {
                erro: false,
                recintosViaveis: this.geralista(recintoFiltrados, animal, quantidade)
            };
        }

        if (animal === 'HIPOPOTAMO') {
            const recintoFiltrados = recintos
                .filter((recinto) => this.verificaBioma(recinto, animal)
                    && this.coparaAnimaisCarnivoros(recinto)
                    && animalInfo[animal].tamanho * quantidade + this.somaAnimaisExistentes(recinto) <= recinto.tamanhoTotal
                    && (recinto.animais.length === 0 || recinto.bioma === 'savana e rio')
                ).map((recinto) => {
                    return {
                        ...recinto,
                        extra: recinto.animais.every(({ especie }) => especie !== animal)
                        && recinto.animais.length !== 0
                    };
                });
            console.log('aque', recintoFiltrados);

            return {
                erro: false,
                recintosViaveis: this.geralista(recintoFiltrados, animal, quantidade)
            };
        }

    }
    geralista(novalista, animal, quantidade) {
        return novalista.map((recinto) => {
            const result = {
                recinto: recinto.id,
                espacoLivre: recinto.tamanhoTotal - (animalInfo[animal].tamanho * quantidade) - this.somaAnimaisExistentes(recinto) - (recinto.extra ? 1 : 0),
                espacoTotal: recinto.tamanhoTotal
            };
            return `Recinto ${result.recinto} (espaço livre: ${result.espacoLivre} total: ${result.espacoTotal})`;
        });
    }
    somaAnimaisExistentes(recinto) {
        return recinto.animais
            .reduce((acc, ani) => acc + ani?.quantidade * animalInfo[ani.especie]?.tamanho, 0);
    }
    coparaAnimaisCarnivoros(recinto) {
        return recinto.animais
            .every(({ especie }) => especie !== 'LEAO' && especie !== 'LEOPARDO' && especie !== 'CROCODILO');
    }
    verificaBioma(recinto, animal) {
        return animalInfo[animal].bioma.some((bioma) => recinto.bioma === bioma);
    }
    verificaEspacoDisponivel(recinto, animal, quantidade) {
        return animalInfo[animal].tamanho * quantidade + this.somaAnimaisExistentes(recinto) <= recinto.tamanhoTotal;
    }

}

export { RecintosZoo as RecintosZoo };


console.log(new RecintosZoo().analisaRecintos('LEOPARDO', 1));

