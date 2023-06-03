const router = require('express').Router();

const blogRoutes = require('./blog-routes.js');
const loginRoutes = require('./login-routes.js');
const signupRoutes = require('./signup-routes.js');

router.use('/login', loginRoutes);
router.use('/blog', blogRoutes);
router.use('/signup', signupRoutes)
router.get('/', async (req, res) => {
    res.render('landing-page');
  });

module.exports = router;
