CREATE TABLE Customer(
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    street VARCHAR(255),
    house_number INT NOT NULL,
    zip_code INT NOT NULL
);


CREATE OR REPLACE TABLE USER(
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),

    PRIMARY KEY (user_id)
);