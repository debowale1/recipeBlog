const mongoose = require('mongoose')
const faker = require('faker')
const Category = require('./models/categorySchema')
const Recipe = require('./models/recipeSchema')


require('dotenv').config()

// connect database
const db = process.env.MONGO_URI.replace('<PASSWORD>', process.env.MONGO_PASS)
mongoose.connect(db)
        .then(con => console.log(con.connection.host))

const importData = async() => {
  try {
    
      await Category.insertMany([
              {
                "name": "Thai",
                "image": "thai-food.jpg"
              },
              {
                "name": "American",
                "image": "american-food.jpg"
              }, 
              {
                "name": "Chinese",
                "image": "chinese-food.jpg"
              },
              {
                "name": "Mexican",
                "image": "mexican-food.jpg"
              }, 
              {
                "name": "Indian",
                "image": "indian-food.jpg"
              },
              {
                "name": "Spanish",
                "image": "spanish-food.jpg"
              }
            ])
      await Recipe.insertMany([
              { 
                "name": "Simple chocolate tart",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Thai", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Indian", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Chinese", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Thai", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Thai", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Chinese", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Indian", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Thai", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Thai", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Mushroom stroganoff",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Mexican", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Chinese", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Indian", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "southern-friend-chicken.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "desc": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "Mexican", 
                "image": "southern-friend-chicken.jpg"
              },
            ])
    console.log('data seeded');
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

const deleteData = async () => {
  try {
    await Category.deleteMany()
    await Recipe.deleteMany()
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}


if(process.argv[2] === '--import'){
  importData()
 
}
if(process.argv[2] === '--delete'){
  deleteData()
  
}