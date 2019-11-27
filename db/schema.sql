DROP DATABASE IF EXISTS eatburgers;
CREATE DATABASE eatburgers;

USE eatburgers;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger VARCHAR(255) NOT NULL,
    eaten BOOLEAN NOT NULL DEFAULT false,
    eaten_by VARCHAR(255),
    PRIMARY KEY(id)
)