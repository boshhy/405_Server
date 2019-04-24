var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
  if (req.session.userid === undefined)
    res.redirect('/login');
  else
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { data: 'This is some data!'});
});

module.exports = router;