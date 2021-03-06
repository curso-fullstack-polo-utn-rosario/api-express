var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET users listing. */
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
