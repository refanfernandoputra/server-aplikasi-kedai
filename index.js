const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

//controllers
const Categories = require('./controllers/categories')
const Menus= require('./controllers/menus')
const Orders= require('./controllers/orders')
const Transactions= require('./controllers/transactions')


app.get('/', (req, res) => res.send('Hello World!'))
app.group("/api/v1", (router) => {

    //todos API Categories
    router.get('/Categories', Categories.index)    
    router.get('/Categories/:id', Categories.show)
    router.post('/Categories', Categories.store)
    router.patch('/Categories/:id', Categories.update)    
    router.delete('/Categories/:id', Categories.destroy)         

    router.get('/Menus', Menus.index)    
    router.get('/Menus/:id', Menus.show)    
    router.post('/Menus', Menus.store)
    router.patch('/Menus/:id', Menus.update)    
    router.delete('/Menus/:id', Menus.destroy)

    router.get('/Orders', Orders.index)    
    router.get('/Orders/:id', Orders.show) 
    router.post('/Orders', Orders.store)    
    router.post('/Orders', Orders.store)
    router.patch('/Orders/:id', Orders.update)    
    router.delete('/Orders/:id', Orders.destroy)   

    router.get('/Transactions', Transactions.index)    
    router.get('/Transactions/:id', Transactions.show)
    router.post('/Transactions', Transactions.store)   
    router.post('/Transactions', Transactions.store)
    router.patch('/Transactions/:id', Transactions.update)    
    router.delete('/Transactions/:id', Transactions.destroy)    

})


app.listen(port, () => console.log(`Listening on port ${port}!`))