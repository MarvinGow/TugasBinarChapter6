const { Biodata, User } = require('../models')

class UserController {
    static findAll(req, res) {
        User.findAll({
                include: [{
                    model: Biodata
                }],
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(user => {
                res.render('user/list', { user })
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static add_form(req, res) {
        res.render('user/add')
    }

    static add({ body }, res) {
        User.create({...body })
            .then(() => {
                res.redirect('/user')
            })
            .catch(err => {
                res.render({ user: body, err: err.message })
                res.render('error/error', { err })
            })
    }

    static edit({ params }, res) {
        User.findByPk(params.id)
            .then(user => {
                res.render('user/edit', { user, err: null })
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static update({ body, params }, res) {
        User.findByPk(params.id)
            .then(user => {
                user.Username = body.Username,
                    user.passwordUser = body.passwordUser,
                    user.updatedAt = new Date()
                return user.save()
            })
            .then(() => {
                res.redirect('/user')
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static destroy({ params }, res) {
        User.destroy({
                where: { id: user.id }
            })
            .then(() => {
                res.redirect('/user')
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }
}


module.exports = UserController