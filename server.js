const express = require('express')
const logger = require('morgan')

const server = express()

server.use(logger('dev'))
server.use(express.json())

module.exports = server
