CREATE TABLE IF NOT EXISTS lists (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(60) NOT NULL UNIQUE,
	card_id int NOT NULL,
	username_id int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS cards (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(60) NOT NULL UNIQUE,
	username_id int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(60) NOT NULL UNIQUE,
	card_id int NOT NULL,
	list_id int NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE lists
	ADD CONSTRAINT fk_l_card FOREIGN KEY (card_id) REFERENCES cards(id),
	ADD CONSTRAINT fk_l_username FOREIGN KEY (username_id) REFERENCES users(id);

ALTER TABLE cards
	ADD CONSTRAINT fk_c_username FOREIGN KEY (username_id) REFERENCES users(id);
	
ALTER TABLE users
	ADD CONSTRAINT fk_u_card FOREIGN KEY (card_id) REFERENCES cards(id),
	ADD CONSTRAINT fk_u_list FOREIGN KEY (list_id) REFERENCES lists(id);