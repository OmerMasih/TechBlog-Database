const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async function(req, res) {
  try {
    const getAllUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(function()  {
      req.session.userId = getAllUser.id;
      req.session.username = getAllUser.username;
      req.session.loggedIn = true;

      res.json(getAllUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async function(req, res) {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const createPassword = user.checkPassword(req.body.password);

    if (!createPassword) {
      res.status(400).json({ message: 'User account not found' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'Now you are logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'User account not found' });
  }
});

router.post('/logout', function(req, res) {
  if (req.session.loggedIn) {
    req.session.destroy(function()  {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
