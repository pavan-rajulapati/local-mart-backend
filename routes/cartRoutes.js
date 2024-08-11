const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const handleCart = require('../controls/cartControls')

const routes = express.Router()
routes.post('/cart',verifyToken,handleCart)

module.exports = routes