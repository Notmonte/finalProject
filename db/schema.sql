DROP DATABASE IF EXISTS finaldb;
CREATE DATABASE finaldb;
USE finaldb;

CREATE TABLE pc (
    pc_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(60) NOT NULL,
    tower VARCHAR(30) NOT NULL,
    os_id MEDIUMINT UNSIGNED,
    processor_id MEDIUMINT UNSIGNED,
    video_card_id MEDIUMINT UNSIGNED,
    memory VARCHAR(30) NOT NULL,
    primary_storage VARCHAR(20) NOT NULL,
    power_supply VARCHAR(45) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,  
    imgUrl MEDIUMTEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_pc PRIMARY KEY (pc_id),
    CONSTRAINT fk_os FOREIGN KEY (os_id) REFERENCES os (os_id),
    CONSTRAINT fk_processor FOREIGN KEY (processor_id) REFERENCES processor (processor_id),
    CONSTRAINT fk_video_card FOREIGN KEY (video_card_id) REFERENCES video_card (video_card_id)
);
--(Decimal) M has to also include numbers after decimal as total numbers ex. 1234 (4, 2) will not work beacuse 2 means 1234.00 so you will have to say 6 instead of 4 to include numbers after decimal



-- Os and Processor table for repeating data 
CREATE TABLE os (
    os_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    os VARCHAR(20) NOT NULL,
    CONSTRAINT pk_os PRIMARY KEY (os_id)
)

CREATE TABLE processor (
    processor_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    processor VARCHAR(30) NOT NULL, 
    CONSTRAINT pk_processor PRIMARY KEY (processor_id)
);

CREATE TABLE video_card (
    video_card_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    video_card VARCHAR(40) NOT NULL,
    CONSTRAINT pk_video_card PRIMARY KEY (video_card_id)
);


CREATE TABLE user (
    user_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(40) NOT NULL,
    lName VARCHAR(40) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    phone VARCHAR(10) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
    CONSTRAINT fk_os FOREIGN KEY (os_id) REFERENCES os (os_id),
    CONSTRAINT fk_processor FOREIGN KEY (processor_id) REFERENCES processor (processor_id)
);