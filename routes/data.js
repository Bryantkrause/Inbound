const {Order} = require('../models')

module.exports = app =>{
    app.get('/order', (req, res) =>{
        Order.find()
        .then(order => res.json(order))
        .catch(e => console.log(e))
    })
}