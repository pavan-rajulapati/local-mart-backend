const express = require('express')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/token',verifyToken)

module.exports = routes