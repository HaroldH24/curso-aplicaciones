CREATE DATABASE dbmentoria;
USE dbmentoria;

INSERT INTO mentor (
    id_mentor INT NOT NULL AUTO_INCREMENT,
    nombres VARCHAR(300) NOT NULL,
    apellidos VARCHAR(300) NOT NULL,
    email VARCHAR(300) NOT NULL,
    profesion VARCHAR(300)
)

INSERT INTO mentorizado (
    id_mentorizado INT NOT NULL AUTO_INCREMENT,
    nombres VARCHAR(300) NOT NULL,
    apellidos VARCHAR(300) NOT NULL,
    email VARCHAR(300) NOT NULL,
    perfil VARCHAR(300),
    competencia VARCHAR(300),
    fk_id_mentor INT
)

ALTER TABLE mentorizado ADD FOREIGN KEY (fk_id_mentor) REFERENCES mentor(id_mentor)

INSERT INTO sesion (
    id_sesion INT NOT NULL AUTO_INCREMENT,
    fecha DATE,
    compromiso VARCHAR(300) NOT NULL,
    fk_id_mentor INT
)
ALTER TABLE sesion ADD FOREIGN KEY (fk_id_mentor) REFERENCES mentor(id_mentor)