-- table names are always plural - animals
-- id as integer, primary key, autoincrementing
-- species as text
-- image as text
-- description as text

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species TEXT,
  image TEXT,
  description TEXT
);
