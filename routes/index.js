const express = require('express')
const router = express.Router()

const biodata = require('./biodata')
const history = require('./history')
const user = require('./user')

router.get('/', (req, res) => {
    res.render('index')
})

router.use('/biodata', biodata)
router.use('/history', history)
router.use('/user', user)

module.exports = router