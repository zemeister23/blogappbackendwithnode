var express = require('express');
var router = express.Router();
// 1 - STEP IS CREATE MONGODB CONNECTION FOR ADMINS AND MAKE SCHEMA

/* GET admins listing. */
router.get('/', function (req, res, next) {
  res.json("ALL ADMIN HERE METHOD GET");
});

/* POST for signup admins. */
router.post('/signup', function (req, res, next) {
  res.json("SIGNUP ADMINS FOR POST METHOD");
});


module.exports = router;