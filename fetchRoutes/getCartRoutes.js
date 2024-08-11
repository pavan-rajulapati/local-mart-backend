const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const getCart = require('../fetching/getCart')

const routes = express.Router()
routes.get('/cart/items',verifyToken,getCart)

module.exports = routes