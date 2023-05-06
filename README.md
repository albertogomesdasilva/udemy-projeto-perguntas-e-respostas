# npm init

# git hub: udemy-projeto-perguntas-e-respostas" 


# CRIA O ARQUIVO index.js (end point)

# https://ejs.co/

# npm install express --save

# npm install ejs --save

index.js
const express = require ('express')

const app = express()

// ESTA LINHA CONFIGURA A ENGINE 'EJS' NO PROJETO
app.set('view engine', 'ejs')

app.get("/",(req, res) => {
    res.send("Bem Vindo ao meu site")
})

app.listen(8080, (()=> {
    console.log("App rodando na Porta 8080!")
}))

# nodemon index.js

# 

# PASSANDO VARIÁVEIS PARA O HTML

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

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SISTEMA DE PERGUNTAS E RESPOSTAS</title>
</head>
<body>
    <h1>Guia Perguntas e Respostas</h1>
    <hr>
    <p>Meu nome é <%= nome %> </p> 
    <p> Vamos trabalhar na linguagem <%= lang %></p>
    <p> Inscritos: <%= inscritos %> </p>
    <p> Inscritos: <%= nome %> </p>

    
</body>
</html>

