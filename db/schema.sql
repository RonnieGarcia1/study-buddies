DROP DATABASE IF EXISTS study_buddies;
CREATE DATABASE study_buddies;

\c study_buddies;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    main_focus TEXT,
    date_formed DATETIME,
    contact_email TEXT
);
