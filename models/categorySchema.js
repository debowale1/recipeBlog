const mongoose = require('mongoose')
const {Schema} =  mongoose

const categorySchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  slug: String,
  image: {
    type: String,
    required: [true, 'Image is required']
  }
})

module.exports = mongoose.model('Category', categorySchema)
 