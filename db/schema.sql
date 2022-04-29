DROP DATABASE IF EXISTS study_buddies;
CREATE DATABASE study_buddies;

\c study_buddies;

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name TEXT,
    main_focus TEXT,
    date_formed DATETIME,
    contact_email TEXT
);

DROP TABLE IF EXISTS events;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name TEXT,
    virtual_meeting_link TEXT,
    study_group_id INTEGER,
    start_time DATETIME,
    end_time DATETIME,
    study_group_id FOREIGN KEY groups(id)
);