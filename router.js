const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.render('home-guest')
})

router.get('/quem-somos', function(req, res) {
    res.render('quem-somos')
})

router.get('/contato', function(req, res) {
    res.render('contato')
})

router.get('/moradas/lofts', function(req, res) {
    res.render('moradas/lofts')
})


module.exports = router