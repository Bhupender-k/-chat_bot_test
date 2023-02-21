const express = require('express')
const {getOpenApiData} = require('../controllers/getOpenApiData')
const router = express.Router()

router.post('/get-data', getOpenApiData)

module.exports = {router}