const express = require('express')
const bodyParser = require('body-parser')
const {Todo} = require('./models/test')
const {mongoose} = require('./db/mongoose')
const _ = require('lodash')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/test' , (req , res) => {
    var createTest = new Todo({
        email : req.body.email,
        password : req.body.password
    })

    createTest.save().then((doc) => {
        res.status(200).send(doc)
    }).catch((e) => {
        res.status(404).send(e)
    })
})

app.get('/test' , (req , res) => {
    Todo.find().then((todos) => {
        res.send(todos)
    }).catch((e) => {
        res.status(400).send()
    })
})

app.listen(PORT)
console.log(`The server is up and running on 127.0.0.1:${PORT}`)