const express = require('express ');
const bp = require('body-parser');
const server = express();
const port = 5000;

server.use(bp.json());

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});