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

module.exports = {
  getAllPosts: getAllPosts
};
