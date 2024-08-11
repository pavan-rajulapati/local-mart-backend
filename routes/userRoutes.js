const express = require('express')
const handleUser = require('../controls/userControls')

const routes = express.Router()
routes.post('/register',handleUser)

module.exports = routes