const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data');
const Schema = mongoose.Schema;
var NewServiceSchema = new Schema({

    user: String,
    userservice: String,

})
var Productdata = mongoose.model('userpostdata2', NewServiceSchema); // here the SERVICPROVIDERS is name of the collection
module.exports = Productdata;