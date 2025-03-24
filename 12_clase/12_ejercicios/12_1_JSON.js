// En el JSON del último ejemplo indica el código de acceso al email de The Bridge de Isabel.

let objeto = [
    {
        "nombre": "Francisco Ramirez",
        "puesto": "Contable",
        "Emails": [
            "francisco@gmail.com",
            "francisco@hotmail.es",
            "francisco@thebridgeschool.es"
        ]
    },
    {
        "nombre": "Isabel Pérez",
        "edad": 31,
        "puesto": "Profesora",
        "Emails": [
            "isabel@gmail.com",
            "isabel@hotmail.es",
            "isabel@thebridgeschool.es"
        ]
    }
];

console.log(objeto[1].Emails[2]);