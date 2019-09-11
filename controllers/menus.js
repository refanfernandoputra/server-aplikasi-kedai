const model = require('../models')
const Menus = model.menus
const Categories = model.categories

exports.index = (req, res) => {
    Menus.findAll({
        include : [{
            model : Categories,
            as : 'categories'
        }]
    }).then(data => res.send(data))
}

exports.show = (req, res) => {
    Menus.findOne(
        {
            where: { id: req.params.id }
        }).then(data => res.send(data))
}

exports.store = (req, res) => {

    const {name,price,categorieId,image} = req.body
    Menus.create({
        name: name,
        price:price,
        categorieId:categorieId,
        image:image
    }).then(Menus => {
        res.send({
            messages: "success",
            Menus: Menus.name
        })
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Menus.update(req.body, { where: { id: req.params.id } }).then(menus => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    menus.destroy(
        {
            where: { id: req.params.id }
        }).then(menus => {
            res.send({
                messages: 'Berhasil Dihapus',
                menus: menus.name
            })
        })
}