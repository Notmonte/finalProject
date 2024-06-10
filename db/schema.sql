DROP DATABASE IF EXISTS finaldb;
CREATE DATABASE finaldb;
USE finaldb;

CREATE TABLE pc (
    pc_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(60) NOT NULL,
    os VARCHAR(20) NOT NULL,
    tower VARCHAR(30) NOT NULL,
    processor VARCHAR(30) NOT NULL,
    video_card VARCHAR(40) NOT NULL,
    memory VARCHAR(30) NOT NULL,
    primary_storage VARCHAR(20) NOT NULL,
    power_supply VARCHAR(45) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,  
    imgUrl MEDIUMTEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_pc PRIMARY KEY (pc_id)
);
-- M has to also include numbers after decimal as total numbers ex. 1234 (4, 2) will not work beacuse 2 means 1234.00 so you will have to say 6 instead of 4 to include numbers after decimal



-- Os and Processor table for repeating data (ask herb for help)
CREATE TABLE os (
    os_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    os VARCHAR(20) NOT NULL
)

CREATE TABLE processor (
    processor_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    processor VARCHAR(30)
)



CREATE TABLE user (
    user_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(40) NOT NULL,
    lName VARCHAR(40) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    phone VARCHAR(10) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

ALTER TABLE user
MODIFY COLUMN phone VARCHAR(20) UNIQUE NOT NULL;