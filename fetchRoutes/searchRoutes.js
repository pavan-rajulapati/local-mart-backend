const express = require('express')
const handleSearch = require('../fetching/search')

const routes = express.Router()
routes.get('/query/:q',handleSearch)

module.exports = routes