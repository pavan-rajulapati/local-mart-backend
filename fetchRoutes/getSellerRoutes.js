const express = require('express')
const getSeller = require('../fetching/getSellerData')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.get('/get_seller',verifyToken,getSeller)

module.exports = routes