const biodata = require('express').Router()
const BiodataController = require('../controllers/BiodataController')

// routes user/
biodata.get('/', BiodataController.findAll)
biodata.get('/add', BiodataController.add_form)
biodata.post('/add', BiodataController.add)
biodata.get('/edit/:id', BiodataController.edit)
biodata.post('/edit/:id', BiodataController.update)
biodata.get('/delete/:id', BiodataController.destroy)

module.exports = biodata