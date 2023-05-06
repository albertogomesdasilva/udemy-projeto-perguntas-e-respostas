const express = require ('express')

const app = express()

// ESTA LINHA CONFIGURA A ENGINE 'EJS' NO PROJETO
app.set('view engine', 'ejs')

app.get("/",(req, res) => {
    // res.send("Bem Vindo ao meu site")
    res.render("index", {
        nome: "Gomes",
        lang: "NodeJS",
        empresa: "Guia do Programador",
        inscritos: 8000,
    })
})

app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false

    res.render("index", {
        nome: nome,
        lang: lang,
        inscritos: 1000,
        msg: exibirMsg
    })
})
app.get("/home",(req, res) => {
    // res.send("Bem Vindo ao meu site")
    res.render("home")
})

app.listen(8080, (()=> {
    console.log("App rodando na Porta 8080!")
}))