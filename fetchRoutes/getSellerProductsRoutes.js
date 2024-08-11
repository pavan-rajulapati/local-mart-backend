const getSellerProducts = require('../fetching/sellerProducts')
const express = require('express')

const routes = express.Router()
routes.get('/seller_products/:sellerId',getSellerProducts)

module.exports = routes