CREATE OR REPLACE DATABASE LINGENLIEFERT;

USE LINGENLIEFERT;

CREATE OR REPLACE TABLE STORE
(
    STORE_ID   INT,
    STORE_NAME VARCHAR(255) NOT NULL,
    LOGO       VARCHAR(255),
    PHONE_NR   LONG         NOT NULL,

    PRIMARY KEY (STORE_ID)
);

CREATE OR REPLACE TABLE STORE_ADDRESS
(
    STORE_ID INT,
    STREET   VARCHAR(255) NOT NULL,
    HR_NR    INT          NOT NULL,
    ZIP      INT          NOT NULL,
    PRIMARY KEY (STORE_ID)

);

CREATE OR REPLACE TABLE COORDINATES
(
    STORE_ID  INT,
    LONGITUDE DOUBLE NOT NULL,
    LATITUDE  DOUBLE NOT NULL,
    PRIMARY KEY (STORE_ID)
);

CREATE OR REPLACE TABLE CITY
(
    ZIP       INT,
    CITY_NAME VARCHAR(255) NOT NULL,
    PRIMARY KEY (ZIP)
);
