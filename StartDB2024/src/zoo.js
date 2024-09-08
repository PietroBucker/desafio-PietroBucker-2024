const zoo = {
    recintos: [
        {
            id: 1,
            bioma: "savana",
            tamanhoTotal: 10,
            animais: [
                {
                    especie: "MACACO",
                    quantidade: 3
                },
            ]

        },
        {
            id: 2,
            bioma: "floresta",
            tamanhoTotal: 5,
            animais: []
        },
        {
            id: 3,
            bioma: "savana e rio",
            tamanhoTotal: 7,
            animais: [{
                especie: "GAZELA",
                quantidade: 1
            }
        ]
        },
        {
            id: 4,
            bioma: "rio",
            tamanhoTotal: 8,
            animais: []
        },
        {
            id: 5,
            bioma: "savana",
            tamanhoTotal: 9,
            animais: [{
                especie: "LEAO",
                quantidade: 1
            }]
        }
    ],

    animalInfo: {
        MACACO: {
            bioma: ["savana", "floresta", "savana e rio"],
            tamanho: 1
        },
        LEAO: {
            bioma: ["savana", "savana e rio"],
            tamanho: 3
        },
        GAZELA: {
            bioma: ["savana", "savana e rio"],
            tamanho: 2
        },
        CROCODILO: {
            bioma: ["rio", "savana e rio"],
            tamanho: 3
        },
        LEOPARDO: {
            bioma: ["savana", "savana e rio"],
            tamanho: 2
        },
        HIPOPOTAMO: {
            bioma: ["savana", "rio", "savana e rio"],
            tamanho: 4
        }
    }
};

export default zoo;