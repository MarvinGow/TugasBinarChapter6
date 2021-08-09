const user = require('express').Router()
const UserController = require('../controllers/UserController')

// routes user/
user.get('/', UserController.findAll)
user.get('/add', UserController.add_form)
user.post('/add', UserController.add)
user.get('/edit/:id', UserController.edit)
user.post('/edit/:id', UserController.update)
user.get('/delete/:id', UserController.destroy)

module.exports = user