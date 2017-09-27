CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  released VARCHAR(200),
  director VARCHAR(200),
  actors VARCHAR(200),
  plot VARCHAR(600),
  imdb_rating VARCHAR(200),
  image_url VARCHAR(400)
);