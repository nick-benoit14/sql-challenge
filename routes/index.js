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
});

router.get('/:id', function(req, res){
  db.getPost(req.params.id, function(err, post){
    if(err){return next(err);}
    res.render('show', {id: req.params.id, title:post.title, content: post.content })
  });
});

router.get('/:id/edit', function(req, res){
  db.getPost(req.params.id, function(err, post){
    if(err){return next(err);}
    res.render('edit', {id: req.params.id, title:post.title, content: post.content })
  });
});

router.post('/:id/edit', function(req, res){
  const id = req.params.id;
  const post = {title: req.body.title, content: req.body.content};
  db.updatePost(id, post, function(err, success){
    if(err){return next(err);}
    res.redirect(`/${id}`);
  })
});

module.exports = router;
