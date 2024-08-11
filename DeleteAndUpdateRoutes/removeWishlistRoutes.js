const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const removeWishlist = require('../DeleteAndUpdate/removeWishlist')

const routes = express.Router()
routes.delete('/remove-wishlist-item',verifyToken,removeWishlist)

module.exports = routes