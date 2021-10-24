const express = require('express')
const recipeController = require('../controllers/recipeController')
const router = express.Router()

/**
 * App Routes
 */
router.get('/', recipeController.home)
router.get('/categories', recipeController.exploreCategories)
router.get('/recipe/:recipe', recipeController.recipe)
router.post('/search', recipeController.searchRecipe)

module.exports = router