const express = require('express')
const getUserData = require('../fetching/getProfile')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.get('/user_data',verifyToken,getUserData)

module.exports = routes
