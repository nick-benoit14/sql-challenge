var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */

router.get('/', function(req, res) {
  db.getAllPosts(function(posts){
    res.render('index', { title: 'Blog Posts', posts:posts });
  });
});

router.get('/new', function(req, res) {
  res.render('new', { title: 'New Blog Post'});
});

router.post('/new', function(req, res){
  db.savePost(
    {title: req.body.title, content: req.body.content},
    function(){ res.redirect('/'); }
  )
})

module.exports = router;
