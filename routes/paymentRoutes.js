const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const handlePayment = require('../middlewares/payment')

const routes = express.Router()
routes.post('/check_out',verifyToken,handlePayment)

module.exports = routes