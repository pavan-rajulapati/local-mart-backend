const getProductsById = require('../fetching/getProductsById')
const express = require('express')

const routes = express.Router()
routes.get('/product/:category',getProductsById)

module.exports = routes