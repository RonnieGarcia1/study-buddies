\c study_buddies;

SELECT * FROM groups;
SELECT * FROM events;

INSERT INTO groups (study_group_id, name, main_focus, date_formed, contact_email) VALUES
(1, 'Brooklyn Tech Meetup', 'Javascript', 'December 01 2022','email@email.com'),
(2, 'Pursuit Hackathon', 'Python', 'December 01 2022','email@email.com');

INSERT INTO events (eventid, name, virtual_meeting_link, start_time, end_time, number_of_attendees, study_group_id, cancelled) VALUES
(1, 'Getting started with React', 'https://www.zoom.us/j/7144665493','11:00', '3:00', 30, 1, false),
(2, 'Networking for Junior Developers', 'https://www.zoom.us/j/71446653093', '12:00', '4:00', 43, 2, false);
