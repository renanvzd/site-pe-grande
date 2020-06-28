const express = require('express')
const app = express()

const router = require('./router')


let port = process.env.PORT
if (port == null || port == "") {
    port=3000
}

app.use('/public', express.static('public'))
app.use('/models', express.static('models'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port)
