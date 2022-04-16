const db = require("../database/connect");
const { listUsers, createUser } = require("../database/user-queries");

/**
 * An app user
 */
class User {

    /**
     * Creates a new User object
     * 
     * @param {object} data User details from the database 
     */
    constructor (data) {
        this.id = data.user_id;
        this.username = data.user_name;
        this.password = data.user_password;
        this.email = data.user_email;
        this.role = data.user_role;
    }


    /**
     * @returns {object} Non-sensitive user details 
     */
    get details () {
        return {
            id : this.id,
            username : this.username,
            role : this.role
        }
    }

    /**
     * Extracts an array of User objects from the database
     * 
     * @returns {Promise} A promise that resolves to an array of User instances
     */
    static getAll() {
        return new Promise( async (resolve, reject) => {
            try {
                const result = await db.query(listUsers);
                const users = result.rows.map(r => new User(r));
                resolve(users);
            } catch (err) {
                reject(err);
            }
        })
    }

    static create(data) {
        return new Promise( async (resolve, reject) => {
            try {
                const result = await db.query(createUser,
                                              [data.username,
                                               data.password,
                                               data.email,
                                               data.role]);
                const user = new User(result.rows[0]);
                resolve(user);
            } catch (err) {
                reject(err);
            }
        })
    }
}

module.exports = User;