const mongoose = require('mongoose')
var Todo = mongoose.model('Todo' , {
    email : {
        type : String,
        trim : true,
        require : true
    },

    password : {
        type : String,
        require : true
    }
});

module.exports = {Todo}