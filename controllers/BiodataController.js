const { Biodata, History } = require('../models')

class BiodataController {
    static findAll(req, res) {
        Biodata.findAll({
                include: [{
                    model: History
                }],
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(biodata => {
                res.render('biodata/list', { biodata })
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static add_form(req, res) {
        res.render('biodata/add', { biodata: null, err: null })
    }

    static add({ body }, res) {
        Biodata.create({...body })
            .then((biodata) => {
                console.log(biodata.dataValues.id);
                return Contact.create({
                    biodata: biodata.dataValues.id,
                })
            })
            .then(() => {
                res.redirect('/biodata')
            })
            .catch(err => {
                console.log(err)
                res.render('biodata/add', { biodata: body, err: err.message })
            })
    }

    static edit({ params }, res) {
        Biodata.findByPk(params.id)
            .then(biodata => {
                res.render('biodata/edit', { biodata, err: null })
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static update({ body, params }, res) {

        Biodata.findByPk(params.id)
            .then(biodata => {
                biodata.firstName = body.firstName,
                    biodata.lastName = body.lastName,
                    biodata.address = body.address,
                    biodata.email = body.email
                biodata.updatedAt = new Date()
                return biodata.save()
            })
            .then(() => {
                res.redirect('/biodata')
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }

    static destroy({ params }, res) {
        Biodata.destroy({
                where: { id: params.id }
            })
            .then(() => {
                res.redirect('/biodata')
            })
            .catch(err => {
                console.log(err)
                res.render('error/error', { err })
            })
    }
}

module.exports = BiodataController