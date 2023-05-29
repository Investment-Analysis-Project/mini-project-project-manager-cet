create database projectmanager;

CREATE TABLE ProjectDisplay (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  program VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  year YEAR NOT NULL,
  guide VARCHAR(64),
  member1 VARCHAR(64),
  member2 VARCHAR(64),
  member3 VARCHAR(64),
  member4 VARCHAR(64),
  abstract TEXT,
  report TEXT,
  hosted_link VARCHAR(255),
  code TEXT
);

-- create table teams(
--     t_id VARCHAR(10) PRIMARY KEY NOT NULL,
--     guide_id VARCHAR(10) NOT NULL,
--     program VARCHAR(10) NOT NULL,
--     grad_year varchar(4) NOT NULL
-- );

-- create table guides(
--     g_id VARCHAR(10) PRIMARY KEY NOT NULL,
--     name VARCHAR(20) NOT NULL,
--     areas_of_interest  VARCHAR[]
-- ); 

-- create table students(
--     s_id VARCHAR(10) PRIMARY KEY NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     team_id VARCHAR(10) NOT NULL,
--     FOREIGN KEY(team_id) REFERENCES teams(t_id)
-- );