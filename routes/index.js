var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */

router.get('/', function(req, res) {
  db.getAllPosts(function(posts){
    res.render('index', { title: 'Express', posts:posts });
  });
});

module.exports = router;
