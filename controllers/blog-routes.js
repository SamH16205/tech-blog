const router = require('express').Router();
const Blogpost = require("../models/BlogPost")

  router.get('/', async (req, res) => {
    res.render('homepage');
  });

  router.get('/newpost', async (req, res) => {
    res.render('new-post');
  });

//   when a user writes a new post
  router.post('/newpost', async (req, res) => {
    try{
    const dbBlogData = await Blogpost.create({
        created_by: req.body.created_by,
        text: req.body.text
    })
        res.json(dbBlogData)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//   when a user clicks on a post to read it
  router.get('/:id', async (req, res) => {
    res.render('blogpost');
  });


  router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
})
module.exports = router;