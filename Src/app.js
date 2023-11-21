const express = require("express")
const cors = require('cors');

const app = express()

require("dotenv").config()
app.use(express.json())
app.use(cors())
require("../Model/Connection/DbCon")
const routes = require("../Routes/Excel.Routes")
app.use(routes)
app.get("*", (req, res) => res.send({ error: "invalid url" }))

module.exports = app
