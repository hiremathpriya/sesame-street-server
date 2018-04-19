const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const getMonsters = require('./routes/getMonsters')
const home = require('./routes/home')

const server = express()

server.use(bodyParser.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/monsters', getMonsters)

server.use('/', home)

module.exports = server