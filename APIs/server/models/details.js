const mongoose = require('mongoose')

var Detail = mongoose.model('Detail' , {
    name : {
        type : String,
        require: true
    },

    age : {
        type : Number,
        require : true
    },

    email : {
        type : String,
        require : true
    },
    
    password : {
        type : String,
        require : true
    }
})

module.exports = {Detail}