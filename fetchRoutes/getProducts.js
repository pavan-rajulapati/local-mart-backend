const express = require('express')
const getProducts = require('../fetching/getProducts')

const routes = express.Router()
routes.get('/get_product',getProducts)

module.exports = routes