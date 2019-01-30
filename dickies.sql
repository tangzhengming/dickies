SET NAMES UTF8;
DROP DATABASE IF EXISTS dickies;
CREATE DATABASE dickies CHARSET=UTF8;
USE dickies;
CREATE TABLE usename(
	uid	TINYINT PRIMARY KEY AUTO_INCREMENT,
	uname	VARCHAR(12),
    email   VARCHAR(16),
	upwd    VARCHAR(16),
    phone   VARCHAR(12),
    sex     BOOL,
    birthday DATE
);