const express = require('express')
const handleOrders = require('../controls/orderControls')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/order_item',verifyToken,handleOrders)

module.exports = routes