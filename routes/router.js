var express = require('express');
var router = express.Router();
var CV = require('../schema/CvSchema');

router.get('/', (req, res) => {
    res.status(200).send('hello');
})

router.get('/search/:search', (req, res) => {
    var search = req.params.search    
    res.status(200);
    res.set({
        'Content-Type': 'application/json'
    });
    res.json(test[search]);
    res.send();
})
router.post('/add', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var newCV = new CV();
    newCV.firstname = req.body.genre;
    console.log(newCV);
    newCV.save(function(){
        console.log('CV sauvegardé');
    });
    res.sendStatus(200);
}) 
router.get('/404', (req, res) => {
    res.sendStatus(404);
})
router.get('/*', (req, res) => {
    res.redirect('/404')
})
module.exports = router;