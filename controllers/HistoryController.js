const { Biodata, History } = require('../models')

class HistoryController {
    static findAll(req, res) {
        History.findAll({
                include: [{
                    model: Biodata
                }],
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(history => {
                res.render('history/list', { history })
                    // res.send({subjects})
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static add_form(req, res) {
        res.render('history/add')
    }

    static add({ body }, res) {
        History.create({...body })
            .then(() => {
                res.redirect('/history')
            })
            .catch(err => {
                res.render({ history: body, err: err.message })
                res.render('error/error', { err })
            })
    }

    static edit({ params }, res) {
        History.findByPk(params.id)
            .then(history => {
                res.render('history/edit', { history, err: null })
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static update({ body, params }, res) {
        History.findByPk(params.id)
            .then(history => {
                history.historyScore = body.historyScore,
                    history.updatedAt = new Date()
                return history.save()
            })
            .then(() => {
                res.redirect('/history')
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static destroy({ params }, res) {
        History.destroy({
                where: { id: params.id }
            })
            .then(() => {
                res.redirect('/history')
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }
}


module.exports = HistoryController