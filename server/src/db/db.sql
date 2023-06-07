create database promansys;

CREATE TABLE Usertable(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(20) NOT NULL UNIQUE,
  user_password VARCHAR(20) NOT NULL DEFAULT 'password',
  user_type VARCHAR(20) NOT NULL DEFAULT 'faculty',
  isAdmin BOOLEAN NOT NULL DEFAULT false,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Faculty (
  faculty_id VARCHAR PRIMARY KEY,
  user_id INTEGER NOT NULL,
  faculty_name VARCHAR,
  designation VARCHAR,
  experience INTEGER,
  contact VARCHAR(10),
  area_of_interest VARCHAR[],
  FOREIGN KEY (user_id) REFERENCES Usertable(user_id)
);

CREATE TABLE Project(
  pro_id SERIAL PRIMARY KEY,
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
