const history = require('express').Router()
const HistoryController = require('../controllers/HistoryController')

// routes history/
history.get('/', HistoryController.findAll)
history.get('/add', HistoryController.add_form)
history.post('/add', HistoryController.add)
history.get('/edit/:id', HistoryController.edit)
history.post('/edit/:id', HistoryController.update)
history.get('/delete/:id', HistoryController.destroy)

module.exports = history