var express = require('express');
var router = express.Router();
// 2 - STEP IS CREATE MONGODB CONNECTION FOR USER AND MAKE SCHEMA

/* GET home page. THIS PAGE FOR BLOG NEWS */
router.get('/', function (req, res, next) {
  res.json("THIS IS NEWS PAGE FOR GET METHOD");
});

/* POST FOR NEWS. THIS PAGE FOR BLOG NEWS */
router.post('/', function (req, res, next) {
  res.json("THIS IS NEWS PAGE FOR ADD NEWS POST METHOD");
});

/* UPDATE FOR NEWS. THIS PAGE FOR BLOG NEWS */
router.patch('/', function (req, res, next) {
  res.json("THIS IS NEWS PAGE FOR UPDATE NEWS PATCH METHOD");
});

/* DELETE FOR NEWS. THIS PAGE FOR BLOG NEWS */
router.delete('/', function (req, res, next) {
  res.json("THIS IS NEWS PAGE FOR DELETE NEWS DELETE METHOD");
});


module.exports = router;