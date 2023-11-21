const express = require('express')
const router = new express.Router()
const upload = require("../Middleware/Upload");
const Excel = require("../Controller/Excel.Controller")

router.post('/upload', upload, Excel.add)
router.get('/excel/:id', Excel.get)
router.delete('/excel/:id', Excel.delete)

module.exports = router