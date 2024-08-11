const express = require('express')
const getUserAddress = require('../fetching/getUserAddress')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.get('/user_address',verifyToken,getUserAddress)

module.exports = routes