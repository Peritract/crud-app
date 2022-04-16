CREATE EXTENSION IF NOT EXISTS citext;
CREATE DOMAIN email AS citext
  CHECK ( value ~* '^[a-z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$' );

CREATE TYPE user_role_type AS ENUM ('admin', 'user');

CREATE TABLE IF NOT EXISTS user_account (
    user_id SERIAL PRIMARY KEY,
    user_name citext NOT NULL
      CONSTRAINT duplicate_username UNIQUE
      CONSTRAINT username_length CHECK (LENGTH(user_name) BETWEEN 3 AND 30),
    user_password CHAR(60) NOT NULL,
    user_email email
      CONSTRAINT duplicate_email UNIQUE,
    user_role user_role_type DEFAULT 'user'
);