CREATE EXTENSION IF NOT EXISTS citext;
CREATE DOMAIN email AS citext
  CHECK ( value ~* '^[a-z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$' );

CREATE TYPE user_role_type AS ENUM ('admin', 'user');

CREATE TABLE IF NOT EXISTS user_account (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR (30) NOT NULL CHECK (LENGTH(user_name) >=3),
    user_password CHAR(60) NOT NULL,
    user_email email,
    user_role user_role_type DEFAULT 'user'
);