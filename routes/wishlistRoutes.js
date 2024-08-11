const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const handleWishlist = require('../controls/wishlistControls')

const routes = express.Router()
routes.post('/wishlist_item',verifyToken,handleWishlist)

module.exports = routes