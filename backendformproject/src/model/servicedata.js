const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data');
const Schema = mongoose.Schema;
var NewServiceSchema = new Schema({

    servicename: String,
    serviceservice: String,
    user: String,
    userservice: String,

})
var Productdata = mongoose.model('adminpostdata', NewServiceSchema); // here the SERVICPROVIDERS is name of the collection
module.exports = Productdata;