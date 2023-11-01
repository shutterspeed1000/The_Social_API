const router = require('express').Router();
const thoughtapi = require('./thoughtapi');
const userapi = require('./userapi');

router.use('/api/users', userapi);
router.use('/api/thoughts', thoughtapi);

module.exports = router;