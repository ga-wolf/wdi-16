-- sqlite3 database.db < create_habitats.sql
CREATE TABLE habitats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  landscape TEXT,
  climate TEXT
);
