var express = require('express');
const app = require('../app');
var router = express.Router();
var middleware = require('../middleware');
/* GET users listing. */

router.use(middleware.logger);
router.use(middleware.validate);

router.get('/', function(req, res, next) {
  res.json({pepe: 'test'});
});

router.post('/', function(req, res, next) {
  console.log('body', req.body);
  res.json({
    ...req.body,
    posted: (new Date()).toISOString()
  });
});


module.exports = router;
