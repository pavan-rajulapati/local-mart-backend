const express = require('express')
const getOrderData = require('../fetching/getOrderData')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.get('/order_data',verifyToken,getOrderData)

module.exports = routes