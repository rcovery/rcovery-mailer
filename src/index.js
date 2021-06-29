const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
require('dotenv').config()

app.use(cors())

router.get("/", (req, res) => {
	res.send("Hello")
})

app.use(router)

app.listen(process.env.PORT, console.log(`Server started! [${process.env.PORT}]`))
