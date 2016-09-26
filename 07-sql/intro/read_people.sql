SELECT * FROM people; -- Get all records and all attributes

SELECT first_name FROM people; -- Select just the first_name attributes

SELECT first_name, last_name FROM people;

SELECT * FROM people WHERE id == 1;

SELECT * FROM people WHERE first_name == "Zeppo";

SELECT * FROM people WHERE first_name == "Groucho" AND last_name == "Marx";

SELECT first_name FROM people WHERE first_name == "Groucho" AND last_name == "Marx";
