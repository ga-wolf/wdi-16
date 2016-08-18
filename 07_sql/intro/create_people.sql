-- sqlite3 database.db < create_people.sql
-- sqlite3 database.db
  -- .schema

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);
