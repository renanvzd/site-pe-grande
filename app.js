const express = require('express')
const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('home-guest')
})

app.listen(3000)
