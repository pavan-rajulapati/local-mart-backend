const express = require('express')
const removeCart = require('../fetching/removeCart')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/remove_cart/:productId',verifyToken,removeCart)

module.exports = routes