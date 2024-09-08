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
            }]
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
    habilitados: [
        {
            especie: "MACACO",
            recinto: [
                "savana",
                "floresta"
            ],
            tamanho: 1
        },
        {
            especie: "LEAO",
            recinto: [
                "savana"
            ],
            tamanho: 3
        },
        {
            especie: "GAZELA",
            recinto: [
                "savana"
            ],
            tamanho: 2
        },
        {
            especie: "CROCODILO",
            recinto: [
                "rio"
            ],
            tamanho: 3
        },
        {
            especie: "LOPARDO",
            recinto: [
                "savana"
            ],
            tamanho: 2,
        },
        {
            especie: "HIPOPOTAMO",
            recinto: [
                "savana", "rio"
            ],
            tamanho: 4
        }
    ],

    teste: {
        MACACO: {
            bioma: ["savana", "floresta"],
            tamanho: 1
        },
        LEAO: {
            bioma: ["savana"],
            tamanho: 3
        },
    }
};

export default zoo;