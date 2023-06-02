create database promansys;

CREATE TABLE Project(
  pro_id VARCHAR(10) PRIMARY KEY,
  pro_title VARCHAR(255) NOT NULL,
  pro_desc TEXT, 
  pro_domains VARCHAR[],
  program VARCHAR(100) NOT NULL,
  grad_year INTEGER NOT NULL,
  guide_id VARCHAR(64) NOT NULL,
  mem_1 VARCHAR(64) NOT NULL,
  mem_2 VARCHAR(64),
  mem_3 VARCHAR(64),
  mem_4 VARCHAR(64),
  pro_status BOOLEAN,
  abstract_link TEXT,
  report_link TEXT,
  hosted_link TEXT,
  code_link TEXT,
  FOREIGN KEY (guide_id) REFERENCES Faculty(faculty_id)
);

CREATE TABLE Usertable(
  user_id VARCHAR(10) PRIMARY KEY,
  user_password VARCHAR(20) NOT NULL,
  user_type VARCHAR(20) NOT NULL,
  isAdmin BOOLEAN NOT NULL DEFAULT false,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Faculty (
  faculty_id VARCHAR PRIMARY KEY,
  faculty_name VARCHAR,
  designation VARCHAR,
  area_of_interest VARCHAR[],
  FOREIGN KEY (faculty_id) REFERENCES Usertable(user_id)
);

-- create table teams(
--     t_id VARCHAR(10) PRIMARY KEY NOT NULL,
--     guide_id VARCHAR(10) NOT NULL,
--     program VARCHAR(10) NOT NULL,
--     grad_year varchar(4) NOT NULL
-- );

-- create table students(
--     s_id VARCHAR(10) PRIMARY KEY NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     team_id VARCHAR(10) NOT NULL,
--     FOREIGN KEY(team_id) REFERENCES teams(t_id)
-- );