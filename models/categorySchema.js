const mongoose = require('mongoose')
const { default: slugify } = require('slugify')
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

categorySchema.pre('save', function(next){
  this.slug = slugify(this.name, { lower: true })
  next()
})

module.exports = mongoose.model('Category', categorySchema)
 