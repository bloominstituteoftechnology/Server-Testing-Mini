const app = require('./server.js')
const port = 5000;

app.listen(port, () => {
    console.log("Server is running on port: " + port + "Stuff After")
    console.log(`Server is running on port: ${port} Stuff After`)
});