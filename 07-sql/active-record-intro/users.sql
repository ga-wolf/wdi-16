CREATE TABLE users ( -- Model || class named User
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  description TEXT
);

-- Seeding the database
INSERT INTO users (first_name, last_name, username, description) VALUES ("Bill", "Withers", "leaning", "What a person");
INSERT INTO users (first_name, last_name, username, description) VALUES ("Django", "Reinhardt", "minorswing", "Stephen Grappelli");
INSERT INTO users (first_name, last_name, username, description) VALUES ("Roger", "Spring", "noidea", "noidea");
