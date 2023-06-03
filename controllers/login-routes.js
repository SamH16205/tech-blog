const router = require('express').Router();
const path = require('path');
const User = require('../models/User')

router.get('/current', async (req, res) => {
    if (req.session.loggedIn) {
        res.status(200).json({ username: req.session.username });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
  });
  
  router.get('/', async (req, res) => {
    res.render('login');
  });

  router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = dbUserData.username; 
            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;
