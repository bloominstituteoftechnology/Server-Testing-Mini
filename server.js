const express = require('express');
const bp = require('body-parser');
const server = express();

server.use(bp.json());

module.exports = {
    server
}

