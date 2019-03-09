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
CREATE TABLE shouye(
    lid         TINYINT PRIMARY KEY AUTO_INCREMENT,
    titleYear   VARCHAR(32),
    title       VARCHAR(16),
    img_url     VARCHAR(50)
)
CREATE TABLE details(
    uid  TINYINT PRIMARY KEY AUTO_INCREMENT,     
    id   VARCHAR(16),
    title VARCHAR(32),
    subtitle VARCHAR(32),
    price     DECIMAL(6,2),
    small_url VARCHAR(120),
    size      VARCHAR(48),
    backimg   VARCHAR(32),
    detail    VARCHAR(60),
    texture   VARCHAR(16),
    big_url   VARCHAR(300)
)

http://127.0.0.1:3001/img/color/BK.jpg,http://127.0.0.1:3001/img/color/BG.jpg
http://127.0.0.1:3001/img/DK006142/DK006142-1_DS.jpg


