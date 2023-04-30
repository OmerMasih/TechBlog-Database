const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dataPost = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = dataPost.map((post) => post.get({ plain: true }));

    res.render('allposts-user', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-user-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dataPost = await Post.findByPk(req.params.id);

    if (dataPost) {
      const post = dataPost.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
