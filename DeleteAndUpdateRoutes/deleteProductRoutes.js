const express = require('express')
const deleteProduct = require('../DeleteAndUpdate/deleteProduct')

const routes = express.Router()
routes.delete('/product/:productId',deleteProduct)

module.exports = routes