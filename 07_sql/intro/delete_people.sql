INSERT INTO people (id, first_name, last_name) VALUES (4, "Quartet", "Marx");

INSERT INTO people (id, first_name, last_name) VALUES (5, "Mount Franklin", "Marx");

INSERT INTO people (id, first_name, last_name) VALUES (6, "Hard Graft", "Marx");

DELETE FROM people WHERE id == 4;

DELETE FROM people WHERE first_name == "Mount Franklin";

DELETE FROM people WHERE first_name == "Hard Graft" AND last_name == "Marx";
