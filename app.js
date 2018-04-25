const { server } = require('./server')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

mongoose.connect('mongodb://localhost/schools', {}, err => {
  if (err) return console.log(err)
  console.log('Database connected')
})

server.listen(port, err => {
  if (err) console.log(err)
  console.log(`Server listening on port ${port}`)
})
