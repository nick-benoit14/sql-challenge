DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;

\c blog;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR
);

INSERT INTO posts (title,content)
  VALUES ('Hello World', 'This is my first post');
