const db = require('../db');
const auth_funtion = require('../utils/auth')

const createFaculty = async (username, password, email, faculty_id, faculty_name,
                             designation, area_of_interest, experience, contact) => {
    const hashedPassword = await auth_funtion.hashPassword(password);

    const user_query = {
        text: `INSERT INTO Usertable(username,password,email) VALUES($1,$2,$3) RETURNING *`,
        values: [username,hashedPassword,email]
    }
    const client = await pool.connect()

    try {
        await client.query('BEGIN');

        const result = await client.query(user_query);

        const facult_query = {
            text: `INSERT INTO Faculty (faculty_id, user_id, faculty_name, designation
                                        experience, contact) VALUES($1, $2, $3, $4, $5, $6)
                                        RETURNING *`,
            values  : [faculty_id, result.rows[0].user_id, faculty_name, designation,experience, contact],
        }

        const result2 = await client.query(facult_query);

        return {user: result.rows[0], faculty: result2.rows[0]};
        
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;

    } finally {
        client.release();

    }
};
module.exports = {createFaculty};

