//Import the mongoose module
var mongoose = require("mongoose");
mongoose.set("debug", true);
//Set up default mongoose connection
var mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
