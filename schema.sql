DROP DATABASE IF EXISTS reviewsservice;

CREATE DATABASE reviewsservice;

USE reviewsservice;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  review varchar(1000) NOT NULL,
  rating int NOT NULL,
  created_at date,
  product_id int NOT NULL,
  PRIMARY KEY (ID)
);