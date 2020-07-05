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

router.get('/moradas/minilofts', function(req, res) {
    res.render('moradas/minilofts')
})

router.get('/moradas/casa-dos-fundos', function(req, res) {
    res.render('moradas/casa-dos-fundos')
})

router.get('/moradas/sobrados-amarelo', function(req, res) {
    res.render('moradas/sobrados-amarelo')
})

router.get('/moradas/sobrados-rosa', function(req, res) {
    res.render('moradas/sobrados-rosa')
})

router.get('/moradas/kitroots', function(req, res) {
    res.render('moradas/kitroots')
})

router.get('/moradas/cabaninhas', function(req, res) {
    res.render('moradas/cabaninhas')
})








module.exports = router