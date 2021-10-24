const Category = require('../models/categorySchema')
const Recipe = require('../models/recipeSchema')
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * GET /
 * Home
 */
exports.home = async (req, res) => {
  try {
    const limitNumber = 5
    const categories = await Category.find().limit(limitNumber)
    const latest = await Recipe.find().sort({_id: -1 }).limit(limitNumber)

    const food = {latest}

    res.render('index', { 
      title: 'Recipe Blog | Home',
      categories,
      food 
    })
  } catch (error) {
    res.status(500).send({ message: error.message || 'An error occured'})
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * GET /categories
 * Categories
 */

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20
    const categories = await Category.find().limit(limitNumber)

    res.render('categories', { 
      title: 'Recipe Blog | Categories',
      categories, 
    })
  } catch (error) {
    res.status(500).send({ message: error.message || 'An error occured'})
  }
}