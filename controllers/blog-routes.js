const router = require('express').Router();
const Blogpost = require("../models/BlogPost")

  router.get('/', async (req, res) => {
    const blogpost = await Blogpost.findAll()
    const bp = blogpost.map((data)=>data.get({plain:true}))
    res.render('homepage',{bp, loggedIn: req.session.loggedIn})
  });

router.get('/api', async(req,res) => {
  const dbData = await Blogpost.findAll()
  const dl = dbData.map((data) => data.get({plain:true}))
  res.send({dl})
})

  router.get('/newpost', async (req, res) => {
    res.render('new-post',{loggedIn:req.session.loggedIn});
  });

//   when a user writes a new post
  router.post('/newpost', async (req, res) => {
    try{
    const dbBlogData = await Blogpost.create({
        created_by: req.body.created_by,
        text: req.body.text,
        title: req.body.title
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
    const data = await Blogpost.findByPk(req.params.id)
    res.render('viewpost', data.dataValues);
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