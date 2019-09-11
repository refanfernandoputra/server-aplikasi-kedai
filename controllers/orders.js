const model = require('../models')
const Orders = model.orders

exports.index = (req, res) => {
    Orders.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Orders.findOne(
        {
            where: { id: req.params.id }
        }).then(data => res.send(data))
}

exports.store = (req, res) => {

    const {menuId,price,qty,status,transactionId} = req.body
    Orders.create({
        menuId:menuId,
        price:price,
        qty:qty,
        status:status,
        transactionId:transactionId
    }).then(Orders => {
        res.send({
            messages: "success",
            Orders: Orders.name
        })
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Orders.update(req.body, { where: { id: req.params.id } }).then(orders => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Orders.destroy(
        {
            where: { id: req.params.id }
        }).then(orders => {
            res.send({
                messages: 'Berhasil Dihapus',
                orders: orders.name
            })
        })
}