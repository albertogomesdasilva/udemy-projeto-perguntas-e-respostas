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



