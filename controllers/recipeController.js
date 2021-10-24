
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * GET /
 * Home
 */
exports.home = (req, res) => {

  res.render('index', { title: 'Recipe Blog | Home' })
}