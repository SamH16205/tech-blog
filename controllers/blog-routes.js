const router = require('express').Router();
const Blogpost = require("../models/BlogPost")

  router.get('/', async (req, res) => {
    res.render('homepage');
  });

//   when a user writes a new post
  router.post('/newpost', async (req, res) => {
    Blogpost.create({
        created_by: req.created_by,
        created_on: created_on.email,
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