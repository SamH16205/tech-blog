const router = require('express').Router();
const User = require("../models/User")
  router.get('/', async (req, res) => {
    res.render('signup');
  });

  router.post('/', async (req, res) => {
    User.create({
        username: req.username,
        email: req.email,
        password: req.password
    })
    .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;
