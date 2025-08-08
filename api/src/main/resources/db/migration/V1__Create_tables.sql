-- V1__Create_tables.sql

CREATE TABLE dog (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    breed VARCHAR(255),
    age INTEGER,
    weight NUMERIC(5,2),
    tail_length NUMERIC(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TODO: Create owner table