const express = require('express')
const _ = require('lodash')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')
const {Detail} = require('./models/details')
const {ObjectID} = require('mongodb')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

//POST Request
app.post('/details' , (req , res) => {
    var body = _.pick(req.body , ['name' , 'age' , 'email' , 'password' ])
    var detailSet = new Detail({
        name : body.name,
        age : body.age,
        email : body.email,
        password : body.password 
    })

    detailSet.save().then((details) => {
        res.status(200).send(details)
    }).catch((e) => {
        res.status(404).send()
    })
})

//Get request. General get. Get all from the db
app.get('/details' , (req , res) => {
    Detail.find().then((docs) => {
        res.status(200).send(docs)
    }).catch((e) => {
        res.status(404).send()
    })
})


//Get the specific id thing mentioned.
app.get('/details/:id' , (req , res) => {
    var id = req.params.id

    if(!ObjectID.isValid(id)){
        return res.status(404).send(`${id} doesn't exists`)
    }

    Detail.findById(id).then((docs) => {
        res.status(200).send(docs)
    }).catch((e) => {
        res.status(404).send(e)
    })

})

app.listen(PORT)
console.log(`The server is up and running on ${PORT}`)

