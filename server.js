const express = require("express")

const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br/",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br/",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br/",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br/",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br/",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br/",
    }

]

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get('/', function(req, res) {

    const reverserdIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (idea of reverserdIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get('/ideias', function(req, res) {

    const reverserdIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reverserdIdeas })
})

server.listen(3000)