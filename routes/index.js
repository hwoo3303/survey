<<<<<<< 3ab258388425423497b5079844b8e730323d9ff0
var express = require('express');
=======
var express = require('express'),
    //todos = require('./todos'),
    posts = require('./posts'),
    User = require('../models/User');
>>>>>>> initial commit
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< 3ab258388425423497b5079844b8e730323d9ff0
  res.render('index', { title: 'Express' });
});

=======
  res.render('index');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.use('/posts', posts);

>>>>>>> initial commit
module.exports = router;
