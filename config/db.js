const configdb = require("./config.js")
const mongoose = require("mongoose")

const db = `mongodb+srv://${configdb.admin.name}:${configdb.admin.password}@nzer.fsva2.mongodb.net/?retryWrites=true&w=majority&appName=nzer`;

mongoose.connect(db).then(ans => console.log("db is connected")).catch(err => console.log(err));
