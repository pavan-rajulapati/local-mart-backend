const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const handleProduct = require('../controls/productControls')

const routes = express.Router()
routes.post('/product',verifyToken,handleProduct)

module.exports = routes