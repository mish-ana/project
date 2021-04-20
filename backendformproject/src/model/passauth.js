const express = require('express');
const mongoose = require('mongoose');
const Bcrypt = require("bcryptjs");
mongoose.connect('mongodb://localhost:27017/data');
const Schema = mongoose.Schema;
var NewPassSchema = new Schema({
    servicefirstname: String,
    servicelastname: String,

    serviceuser: String,
    servicepass: String,
    servicephonenumber: String,
    saltsecret: String

});
NewPassSchema.pre('save', function(next) {
    Bcrypt.genSalt(10, (err, salt) => {
        Bcrypt.hash(this.servicepass, salt, (err, hash) => {
            this.pass = hash;
            this.saltsecret = salt;
            next();
        });
    });
});
var Passdata = mongoose.model('passdata', NewPassSchema); // here the passdatais name of the collection
module.exports = Passdata;