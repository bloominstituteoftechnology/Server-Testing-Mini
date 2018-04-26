const server = require('./server')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/schools')
  .then(() => {
    console.log(`\n=== Mongo Online ===\n`)
  })
  .catch(err => console.log(err))

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`\nServer Reporting for Duty on ${port}`)
})
