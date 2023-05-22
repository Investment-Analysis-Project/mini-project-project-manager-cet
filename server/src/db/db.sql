create database projectmanager;

create table projects(
    p_id VARCHAR(10) PRIMARY KEY NOT NULL,
    p_name VARCHAR(50) NOT NULL,
    p_desc TEXT,
    team_id VARCHAR(50) NOT NULL,
    domain VARCHAR(20) NOT NULL,
    completed BOOLEAN NOT NULL,
    abstract TEXT
);

create table teams(
    t_id VARCHAR(10) PRIMARY KEY NOT NULL,
    guide_id VARCHAR(10) NOT NULL,
    program VARCHAR(10) NOT NULL,
    grad_year varchar(4) NOT NULL
);

create table guides(
    g_id VARCHAR(10) PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL,
    areas_of_interest  VARCHAR[]
); 

create table students(
    s_id VARCHAR(10) PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    team_id VARCHAR(10) NOT NULL,
    FOREIGN KEY(team_id) REFERENCES teams(t_id)
);