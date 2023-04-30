const router = require('express').Router();

const routesUser = require('./routesUser.js');
const routesPost = require('./routesPost.js');
const routesComment = require('./routesComment');

router.use('/user', routesUser);
router.use('/post', routesPost);
router.use('/comment', routesComment);

module.exports = router;