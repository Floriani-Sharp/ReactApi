const express    = require('express')
const app        = express()
const port       = process.env.port || 3001
const cors       = require('cors')
const {response} = require('express')


// var
var request = require('request')
var bodyParser = require('body-parser')

// Middlewares
app.use(cors())
app.use(bodyParser.json())


    // Define all controllers
        const containerController = require('./controllers/containerController');
    //Get all containers
    app.get('/container', containerController.getAllContainer);


    // Start dev server
    app.listen(port)