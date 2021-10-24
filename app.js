const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const expressLayouts = require('express-ejs-layouts')
const recipeRouter = require('./routes/recipeRoutes')

const app = express()

// connect database
const db = process.env.MONGO_URI.replace('<PASSWORD>', process.env.MONGO_PASS)
mongoose.connect(db)
        .then(con => console.log(con.connection.host))


app.use(express.urlencoded({ extended: true }))
// static files
app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')


//mount rouers
app.use('/', recipeRouter)

const PORT = process.env.PORT || 3030
app.listen(PORT, () =>{
  console.log(`app listening on port ${PORT}`);
})