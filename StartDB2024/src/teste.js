import zoo from './zoo.js';
const { recintos, habilitados } = zoo;
class teste2 {

    verificaAnimal(animal, quantidade) {
        if (animal === 'MACACO') {
            if (quantidade === 1) {
                const recintoFiltrados = recintos
                    .filter((recinto) => recinto.animais.length !== 0 && recinto.animais.some((ani) => ani.especie !== 'LEAO'));
                    console.log(recintoFiltrados);
                    
                return this.geralista(recintoFiltrados, animal, quantidade);

            }

        }
        






    }
    geralista(novalista, animal, quantidade) {
        return novalista.map((recinto) => {
            return {
                recinto: recinto.id,
                bioma: recinto.bioma,
                espacoLivre: recinto.tamanhoTotal - (zoo.teste[animal].tamanho * quantidade) - recinto.animais
                    .reduce((acc, ani) => acc + ani.quantidade * zoo.teste[ani.especie]?.tamanho, 0),
                espacoTotal: recinto.tamanhoTotal
            };
        });
    }
}

console.log(new teste2().verificaAnimal('MACACO', 1));
