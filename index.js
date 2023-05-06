const express = require ('express')

const app = express()

// ESTA LINHA CONFIGURA A ENGINE 'EJS' NO PROJETO
app.set('view engine', 'ejs')

app.get("/",(req, res) => {
    // res.send("Bem Vindo ao meu site")
    res.render("index", {
        nome: "Alberto",
        lang: "NodeJS",
        empresa: "Guia do Programador",
        inscritos: 8000
    })
})
app.get("/home",(req, res) => {
    // res.send("Bem Vindo ao meu site")
    res.render("home")
})

app.listen(8080, (()=> {
    console.log("App rodando na Porta 8080!")
}))