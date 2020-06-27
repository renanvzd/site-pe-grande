const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.render('home-guest')
})

router.get('/quem-somos', function(req, res) {
    res.render('quem-somos')
})

module.exports = router