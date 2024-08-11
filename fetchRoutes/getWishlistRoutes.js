const express = require('express')
const getWishlist = require('../fetching/getWishlist')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.get('/wishlist_items',verifyToken,getWishlist)

module.exports = routes