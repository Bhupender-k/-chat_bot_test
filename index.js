require('dotenv').config()
const express = require('express')
const openApiRoutes = require('./routes/getOpenApiData').router
const app = express()

let prefix = '/v1/api'
app.use(express.json())
app.use(prefix, openApiRoutes)

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})