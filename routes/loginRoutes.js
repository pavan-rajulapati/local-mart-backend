const express = require('express')
const handleLogin = require('../controls/loginControls')

const routes = express.Router()
routes.use('/login',handleLogin)

module.exports = routes