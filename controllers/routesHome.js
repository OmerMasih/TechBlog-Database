const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// Sittings to get all posts for homepage!!
router.get('/', async function(req, res) {
  try {
    const allPostData = await Post.findAll({
      include: [User],
    });

    const posts = allPostData.map((post) => post.get({ plain: true }));

    res.render('all-user-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// fetching single post
router.get('/post/:id', async function(req, res)  {
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

      res.render('post-single', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', function(req, res) {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', function(req, res) {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
