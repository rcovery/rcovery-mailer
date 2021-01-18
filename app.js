const express = require('express')
const app = express()
const cors = require('cors')
const mail = require('./email')
require('dotenv').config()

app.use(cors())
app.use(express.static("front"))

app.get("/", (req, res) => {
	res.sendFile("index.html")
})
app.post("/sendmail/:encoded?", (req, res) => {
	res.send(mail.verify(req.params.encoded))
})

app.listen(process.env.PORT, console.log("Server started!"))
