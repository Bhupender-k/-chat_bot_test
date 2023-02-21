const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getOpenApiDataService(req) {
    try{
        console.log("Get open api data api starts here!")
        const {yourQuestion} = req.body
        console.log(yourQuestion)
        const promptQuestion = `${process.env.LIMITERLINES} '${yourQuestion}?'`
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptQuestion,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            // stop: ["\"\"\""],
        });
        console.log("response")
        console.log(response)
        const data = response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "")
        // console.log(response.data.choices)
        return data
    }
    catch(err) {
        console.log("err")
        console.log(err)
        throw err
    }
}

module.exports = {
    getOpenApiDataService
}