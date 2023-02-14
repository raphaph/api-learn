const express = require('express')
const app = express()


//middleware SEMPRE usar com body json
app.use(express.json()) //transforma as requisições em json

//rota GET
app.route("/").get((req, res) => res.send("hello")) 
app.route("/:nome").get((req, res) => res.send( req.params.nome)) // Parametros pela rota
app.route("/user/:id").get((req, res) => res.send( req.params.id)) 

app.route("/").get((req, res) => res.send( req.query )) // Query params, envia o conteúdo da rota como resposta

//rota pPOST
app.route("/").post((req,res) => { 
    const {nome, cidade} = req.body // passando constantes dentro da requisição
    res.send(`meu nome é ${nome}, e minha cidade é ${cidade}`)} // retorna responsta com a requisição completa do body
) //app.route("/").post((req,res) => res.send(req.body.livros)) // retorna o valor de uma chave do json, neste caso sendo uma list

//rota PUT
let name = 'Raphael'
app.route('/').put((req,res) => {
    name = req.body
    res.send(name)
})

//rota DELETE
app.route('/:identificador').delete( (req,res) => {
    res.send(req.params.identificador) // identificador passado na rota, geralmente é substituido por um ID ou username, por exmeplo
}) // localhost:3000/0101 <- identificador


app.listen('3000')
console.log('running..')