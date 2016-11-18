var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/posts';
var db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'nickbenoit',
    password: 'Atomicasdf'
});

function getAllPosts(cb) {
  db.any('select * from posts').then(function(posts){
    cb(posts);
  }).catch(function(err){
    cb(err);
  })
}

function savePost(post, cb){
  db.none(
    'insert into posts(title, content) values(${title}, ${content})',
    post
  ).then(function(){
    cb();
  }).catch(function(err){
    cb(err);
  })
}

function getPost(id, cb){
  db.one('select * from posts where id = $1', id).then(function(post){
    cb(null, post);
  }).catch(function(err){ cb(err); })
}

function updatePost(id, post, cb){
  db.none(
    'update posts set title=$1, content=$2 where id=$3',
    [post.title, post.content, id]
  ).then(function(){
    cb(null, true);
  }).catch(function(err){cb(err);})
}

module.exports = {
  getAllPosts: getAllPosts,
  savePost: savePost,
  getPost: getPost,
  updatePost: updatePost
};
