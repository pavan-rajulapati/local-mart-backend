const express = require('express')
const handleUserDetails = require('../controls/userPersonalDetailsControls')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/add_details',verifyToken,handleUserDetails)

module.exports = routes

