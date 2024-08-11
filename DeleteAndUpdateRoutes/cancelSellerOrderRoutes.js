const express = require('express')
const cancelSellerOrder = require('../DeleteAndUpdate/cancelSellerOrder')

const routes = express.Router()
routes.delete('/cancel_order',cancelSellerOrder)

module.exports = routes