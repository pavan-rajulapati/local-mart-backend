const express = require('express')
const updatedProduct = require('../DeleteAndUpdate/updateSellerProduct')

const routes = express.Router()
routes.put('/update-item/:id',updatedProduct)

module.exports = routes