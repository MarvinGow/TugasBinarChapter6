const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
app.use('/', routes)

app.listen(3000, () => {
    console.log('Running at http://localhost:3000')
})