\c study_buddies;

INSERT INTO groups (name, main_focus, date_formed, contact_email) VALUES
('GroupA', 'Javascript', '12/02/2021 11:00','email@email.com'),
('GroupB', 'Python', '12/02/2021 11:00','email@email.com');

INSERT INTO events (id, name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled) VALUES
('1', 'Annual Hackathon', 'https://www.zoom.us/j/7144665493#success', 1,'1/02/2022 11:00', '1/02/2022 3:00', 30, false),
('2', 'Coinbase sponsored hackathon', 'https://www.zoom.us/j/71446653093#success', 2,'1/07/2022 12:00', '1/07/2022 4:00', 43, false);