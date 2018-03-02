var express     =   require('express');
var app         =   express();
var router      =   require('./routes/router.js');
var bodyParser  =   require('body-parser');


var mongoose    =   require('mongoose');
var configUrl   =   require('./config.js');

mongoose.connect(configUrl.url,(callback)=>{
    console.log('Connection established')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

app.listen(3000)