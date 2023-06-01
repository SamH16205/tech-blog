const router = require('express').Router();
const Blogpost = require("../models/BlogPost")
const User = require("../models/User")

  router.get('/', async (req, res) => {
    res.render('homepage',{loggedIn: req.session.loggedIn});
  });

//   when a user writes a new post
  router.post('/newpost', async (req, res) => {
    Blogpost.create({
        created_by: req.body.created_by,
        created_on: req.body.created_on,
    })
    .then((blog) => {
        res.json(blog);
      })
      .catch((err) => {
        res.json(err);
      });
  });

//   when a user clicks on a post to read it
  router.get('/blog/:id', async (req, res) => {
    res.render('homepage');
  });
module.exports = router;