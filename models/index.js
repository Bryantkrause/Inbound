const {model, Schema} = require('mongoose')

const Order = require('./Order.js')(model, Schema)

module.exports = {Order}