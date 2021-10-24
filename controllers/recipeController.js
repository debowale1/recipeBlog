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
    const thai = await Recipe.find({ 'category': 'Thai'}).limit(limitNumber)
    const american = await Recipe.find({ 'category': 'American'}).limit(limitNumber)
    const indian = await Recipe.find({ 'category': 'Indian'}).limit(limitNumber)
    

    const food = { latest, thai, american, indian }

    res.render('index', { 
      title: 'Recipe Blog | Home',
      categories,
      food 
    })
  } catch (error) {
    res.status(500).send({ message: error.message || 'An error occured' })
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
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * GET /hdsh877y
 * Recipe
 */

exports.recipe = async (req, res) => {
  try {
    // const limitNumber = 20
    const recipe = await Recipe.findById(req.params.recipe)

    res.render('recipe', { 
      title: 'Recipe Blog | Categories',
      recipe, 
    })
  } catch (error) {
    res.status(500).send({ message: error.message || 'An error occured'})
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * POST /search
 */
exports.searchRecipe = async(req, res) => {
  try {
    const {searchTerm} = req.body
    let recipe = await Recipe.find({ $text: { $search: searchTerm , $diacriticSensitive: true } })
    res.render('search', { 
      title: 'Recipe Blog | Search',
      recipe
    })

  } catch (error) {
    res.status(500).send({ message: error.message || 'An error occured'})
  }
}