CREATE DATABASE burgers_db;
Use burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burgers_name VARCHAR (255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);