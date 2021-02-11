require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = require('./sortURL/routes');
const dbConnection = require('./mongConnection')
const port = process.env.PORT;


dbConnection.then(() => {
    console.log("Mongo connection is successfull--")

    app.use(bodyParser.json());
    app.use(bodyParser.json({
        type: 'application/*+json'
    }))

    app.use(router)

    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}).catch(err => {
    console.log('some error occured while connecting to mongo: ', err)
})