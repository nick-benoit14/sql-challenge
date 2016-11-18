var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/posts';
var db = pgp(connectionString);

function getAllPosts(cb) {
  cb([{title:"Fake Title", content: "Fake Content"}]);
}

module.exports = {
  getAllPosts: getAllPosts
};
