const express = require('express');
const app = require('../app');
const router = express.Router();

const todoRepository = require('../todo-repository');

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(todoRepository.getItems());
});

router.post('/', function(req, res) {
    res.json(todoRepository.addItem(req.body));
  });
module.exports = router;
