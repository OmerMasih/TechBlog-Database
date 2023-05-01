const router = require('express').Router();

const routesApi = require('./api/');
const routesHome = require('./routesHome');
const routesDashboard = require('./routesDashboard');

router.use('/', routesHome);
router.use('/dashboard', routesDashboard);
router.use('/api', routesApi);

module.exports = router;
