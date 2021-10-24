const mongoose = require('mongoose')
const slugify = require('slugify')
const {Schema} =  mongoose

const recipeSchema = Schema({
  name: {
    type: String,
    required: [true, 'this field is required']
  },
  desc: {
    type: String,
    required: [true, 'this field is required']
  },
  email: {
    type: String,
    required: [true, 'This field is required']
  },
  ingredients: {
    type: Array,
    required: [true, 'this field is required']
  },
  category: {
    type: String,
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: [true, 'this field is required']
  },
  image: {
    type: String,
    required: [true, 'this field is required']
  }
})

recipeSchema.pre('save', function(next){
  this.slug = slugify(this.name, { lower: true })
  next()
})
// to enable text search
recipeSchema.index( { name: "text", desc: "text" } )

module.exports = mongoose.model('Recipe', recipeSchema)
 