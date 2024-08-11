const express = require('express')
const handleSeller = require('../controls/sellerControls')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/seller',verifyToken,handleSeller)

module.exports = routes