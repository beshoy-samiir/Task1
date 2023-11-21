const mongoose = require("mongoose");

const excelSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    location: String,
    price: Number,
    color: String,
});

const ExcelModel = mongoose.model('Excel', excelSchema);
module.exports = ExcelModel