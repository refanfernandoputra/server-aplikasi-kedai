const model = require('../models')
const Categories = model.categories
const Menus = model.menus

exports.index = (req, res) => {
    Categories.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Categories.findOne(
        {
            where: { id: req.params.id }
        }).then(data => res.send(data))
}

exports.store = (req, res) => {

    const { name} = req.body
    Categories.create({
        name: name
    }).then(Categories => {
        res.send({
            messages: "success",
            Categories: Categories.name
        })
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Categories.update(req.body, { where: { id: req.params.id } }).then(categories => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Categories.destroy(
        {
            where: { id: req.params.id }
        }).then(categories => {
            res.send({
                messages: 'Berhasil Dihapus',
                categories: categories.name
            })
        })
}