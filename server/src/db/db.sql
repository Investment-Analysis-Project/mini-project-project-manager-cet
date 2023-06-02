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
  domains VARCHAR[],
  hosted_link VARCHAR(255),
  code TEXT
);

CREATE TABLE Users {
  id SERIAL PRIMARY KEY,
  username varchar NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  user_type VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
};

CREATE TABLE Faculty (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users (id),
  name VARCHAR,
  designation VARCHAR,
  area_of_interest VARCHAR[],
  experience TEXT,
  contact VARCHAR
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