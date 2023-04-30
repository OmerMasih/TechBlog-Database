const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// Sittings to get all posts for homepage!!
router.get('/', async (req, res) => {
  try {
    const allPostData = await Post.findAll({
      include: [User],
    });

    const newPost = allPostData.map((post) => post.get({ plain: true }));

    res.render('all-user-posts', { newPost });
  } catch (err) {
    res.status(500).json(err);
  }
});

// fetching single post
router.get('/post/:id', async (req, res) => {
  try {
    const allPostData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (allPostData) {
      const post = allPostData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
