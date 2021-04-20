const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const ProductData = require('./src/model/servicedata');
const passdata = require('./src/model/passauth');
const jwt = require('jsonwebtoken');
const userpost = require('./src/model/userpost');
const userpost2 = require('./src/model/userpost2');
var app = new express();
app.use(cors()); // to share data from this server to angular server 
app.use(bodyparser.json());




app.get('/servicedetails', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*") // use of this that from any orgin u are getting the request of productapp then u they can acess
    res.header('Access-Control-Allow-Methds : GET , POST, PATCH , PUT ,DELETE ,OPTIONS');
    ProductData.find().then((data) => {
        res.send(data);
        console.log('sucessfully sent');

    });
});

app.get('/servicedetails/userpost', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*") // use of this that from any orgin u are getting the request of productapp then u they can acess
    res.header('Access-Control-Allow-Methds : GET , POST, PATCH , PUT ,DELETE ,OPTIONS');
    userpost.find().then((data) => {
        res.send(data);
        console.log('sucessfully sent');

    });
});

app.get('/servicedetails/userpost2', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*") // use of this that from any orgin u are getting the request of productapp then u they can acess
    res.header('Access-Control-Allow-Methds : GET , POST, PATCH , PUT ,DELETE ,OPTIONS');
    userpost2.find().then((data) => {
        res.send(data);
        console.log('sucessfully sent');

    });
});

app.post('/insert', function(req, res) {

    console.log(req.body);

    var product = {

        servicename: req.body.product.servicename,
        serviceservice: req.body.product.serviceservice,

    }
    var product = new ProductData(product);
    product.save();
});
app.post('/insert/user', function(req, res) {

    console.log(req.body);

    var product = {

        user: req.body.product.user,
        userservice: req.body.product.userservice,

    }
    var product = new userpost(product);
    product.save();
});
app.post('/insert/user2', function(req, res) {

    console.log(req.body);

    var product = {

        user: req.body.product.user,
        userservice: req.body.product.userservice,

    }
    var product = new userpost2(product);
    product.save();
});



app.post('/signupauth', function(req, res) {
    res.header('Access-Control-Allow-Origin', "*") // use of this that from any orgin u are getting the request of productapp then u they can acess
    res.header('Access-Control-Allow-Methds : GET , POST, PATCH , PUT ,DELETE ,OPTIONS');

    console.log(req.body);

    var passauth = {


        servicefirstname: req.body.passauth.servicefirstname,
        servicelastname: req.body.passauth.servicelastname,
        serviceuser: req.body.passauth.serviceuser,
        servicepass: req.body.passauth.servicepass,
        servicephonenumber: req.body.passauth.servicephonenumber
    }
    var passauth = new passdata(passauth);
    passauth.save();
});

app.get("/accounts/searchaccount/:user", (req, res) => {

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const email = req.params.user;

    passdata.findOne({ serviceuser: email })
        .then(function(data) {
            res.send(data);
            console.log(data);
        });

});

app.delete('/remove/:id', (req, res) => {

    id = req.params.id;
    ProductData.findByIdAndDelete({ "_id": id })
        .then(() => {
            console.log('success')
            res.send();
        })
})
app.delete('/remove/user/:id', (req, res) => {

    id = req.params.id;
    userpost.findByIdAndDelete({ "_id": id })
        .then(() => {
            console.log('success')
            res.send();
        })
})

app.delete('/remove/user/:id', (req, res) => {

    id = req.params.id;
    userpost2.findByIdAndDelete({ "_id": id })
        .then(() => {
            console.log('success')
            res.send();
        })
})

app.get('/:id', (req, res) => {

    const id = req.params.id;
    ProductData.findOne({ "_id": id })
        .then((product) => {
            res.send(product);
        });
})

app.put('/update', (req, res) => {
    console.log(req.body)
    id = req.body._id,

        servicename = req.body.servicename,
        serviceservice = req.body.serviceservice,


        ProductData.findByIdAndUpdate({ "_id": id }, {
            $set: {

                "servicename": servicename,
                "serviceservice": serviceservice,

            }
        })
        .then(function() {
            res.send();
        })
})

app.listen(5656);