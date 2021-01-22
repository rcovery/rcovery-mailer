const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const mail = require('./email.js');
require('dotenv').config()

app.use(cors())
app.use(express.static("src/front"));

app.get("/", (req, res) => {
	res.sendFile("/front/")
})
app.post("/sendmail/:encoded?", (req, res) => {
	res.send(mail.verify(req.params.encoded))
})
app.use('/', router);
app.listen(process.env.PORT, console.log("Server started!"))
