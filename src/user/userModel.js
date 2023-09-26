var mongoose = require('mongoose');
// const { default: mongoose } = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    Job: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('employees', userSchema);