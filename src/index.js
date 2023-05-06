// System Modules
const path = require('path')

// Node Modules
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const fileUpload = require('express-fileupload')

// Database Connection
require('./utils/database')

// Local Modules
const routes = require('./routes')
const config = require('./config')

// Create App
const app = express()

// Middlwares
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : path.resolve(config.temp_dir)
}));
app.use('/api', routes)


// Start The Server
app.listen(config.port)