var express     =   require('express');
var app         =   express();
var router      =   require('./routes/router.js');
var bodyParser  =   require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

app.listen(3000)