const model = require('../models')
const Transactions = model.transactions

exports.index = (req, res) => {
    Transactions.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Transactions.findOne(
        {
            where: { id: req.params.id }
        }).then(data => res.send(data))
}

exports.store = (req, res) => {

    const {tableNumber,discount,finishedTime,subTotal,serviceCharge,tax,total,isPaid} = req.body
    Transactions.create({
        tableNumber:tableNumber,
        discount:discount,
        finishedTime:finishedTime,
        subTotal:subTotal,
        serviceCharge:serviceCharge,
        tax:tax,
        total:total,
        isPaid:isPaid
    }).then(Transactions => {
        res.send({
            messages: "success",
            Transactions: Transactions.name
        })
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Transactions.update(req.body, { where: { id: req.params.id } }).then(Transactions => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Transactions.destroy(
        {
            where: { id: req.params.id }
        }).then(Transactions => {
            res.send({
                messages: 'Berhasil Dihapus',
                Transactions: Transactions.name
            })
        })
}