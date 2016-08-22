-- rake db:create
-- sqlite3 development.sqlite3 < planets.sql

CREATE TABLE planets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  orbit FLOAT,
  diameter FLOAT,
  moons INTEGER
);
