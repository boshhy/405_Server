var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Get the login page */
router.get('/login', function (req, res, next) {
  res.render('login', {title: 'Login'});
});

router.get('/logout', function(req, res, next) {
  delete req.session.userid;
  res.redirect('/');
});

router.post('/login', function(req, res, next) {
  /* if username and password are good */
  let userid = req.body.userid;
  let password = req.body.password;

  if (password === 'letmein') {
    /* good passoword */
    req.session.userid = userid;
    res.redirect('/users');
  }
  else {
    res.render('login', {title: 'Login', msg: 'Username or password is incorrect'});
  }
});



module.exports = router;
