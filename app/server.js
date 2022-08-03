const app = require("express")()
const { hostname } = require("os")

app.get('/', (req, res) => {
    console.log("got here")

    return res.status(200).json({ 
        success: true, 
        metadata: hostname(),
        version: "1.4.0"
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App runnning on port ${PORT}`)
})