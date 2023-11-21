const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
mongoose.connect(process.env.dbURL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
