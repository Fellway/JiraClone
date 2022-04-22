INSERT INTO public."tables" ("name")
VALUES('Testowa tablica');

INSERT INTO public."columns"
("name", table_id, priority)
VALUES('TODO', 1, 1), ('IN PROGRESS', 1, 2), ('IN REVIEW', 1, 3), ('TEST DEV', 1, 4), ('DEPLOYED', 1, 5), ('DONE', 1, 6);

INSERT INTO public.tasks
("name", description, createdby, column_id)
VALUES('Stworzenie bazy danych', 'Jako użytkownik chciałbym mieć możliwosc przechowywania informacji na temat aplikacji w bazie dnych', 4, 1),
       ('Stworzenie api', 'Jako programista frontendowy chce miec mozliwosc podlaczenia sie do api', 4, 2);
