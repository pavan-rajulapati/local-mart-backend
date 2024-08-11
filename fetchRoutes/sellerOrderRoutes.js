const sellerOrders = require('../fetching/sellerOrders')
const express = require('express')

const routes = express.Router()
routes.get('/seller/:id',sellerOrders)

module.exports = routes