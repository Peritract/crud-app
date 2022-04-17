const listUsers = `SELECT * FROM user_account;`;

const createUser = `INSERT INTO user_account (
                        user_name,
                        user_password,
                        user_email,
                        user_role
                    ) VALUES (
                        $1, $2, $3, $4
                    ) RETURNING *;`

const getUserByUsername = `SELECT *
                           FROM user_account
                           WHERE user_name = $1;`

const deleteUserByUsername = `DELETE
                              FROM user_account
                              WHERE user_name = $1
                              RETURNING user_name;`

module.exports = {
    listUsers,
    createUser,
    getUserByUsername,
    deleteUserByUsername
}