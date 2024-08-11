const express = require('express')
const handleUserAddress = require('../controls/userAddressControls')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/add_address',verifyToken,handleUserAddress)

module.exports = routes