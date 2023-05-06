const mongoose = require('mongoose')
const config = require('../config')
mongoose.set('strictQuery', false)
mongoose.connect(config.db_path)
