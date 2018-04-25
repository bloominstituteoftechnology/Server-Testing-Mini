const mongoose = require('mongoose')
const { Schema } = mongoose

const SchoolSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
})

const School = mongoose.model('School', SchoolSchema)
module.exports = School
