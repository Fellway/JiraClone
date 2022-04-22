CREATE TABLE IF NOT EXISTS tables (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(60) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS columns (
    id int GENERATED ALWAYS AS IDENTITY,
    name varchar(60) NOT NULL,
    table_id int NOT NULL,
    priority int NOT NULL,
    UNIQUE (table_id, priority),
	PRIMARY KEY (id),
	CONSTRAINT fk_table_id FOREIGN KEY (table_id) REFERENCES tables (id)
);

CREATE TABLE IF NOT EXISTS tasks (
  id int GENERATED ALWAYS AS IDENTITY,
  name varchar(500) NOT NULL,
  description VARCHAR(60) NOT NULL,
  createdBy int NOT NULL,
  column_id int NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_column_id FOREIGN KEY (column_id) REFERENCES columns (id),
  CONSTRAINT fk_createdBy FOREIGN KEY (createdby) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS cards (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(60) NOT NULL UNIQUE,
	username_id int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
	id int GENERATED ALWAYS AS IDENTITY,
	username varchar(60) NOT NULL UNIQUE,
	password varchar(120) NOT NULL,
	PRIMARY KEY (id)
);