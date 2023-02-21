const {getOpenApiDataService} = require('../Services/getOpenApiData.service')
async function getOpenApiData(req, res) {
    try{
        const response = await getOpenApiDataService(req)
        console.log("response")
        console.log(response)
        res.status(200).send({
            data: response
        })
    }
    catch(err) {
        console.log("err")
        console.log(err)
        throw err
    }
}

module.exports = {
    getOpenApiData
}