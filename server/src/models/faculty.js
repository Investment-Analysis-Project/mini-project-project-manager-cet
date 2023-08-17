const db = require('../db');
const auth_funtion = require('../utils/auth')

const createFaculty = async (user_name, password, email, faculty_id) => {
    
    const hashedPassword = await auth_funtion.hashPassword(password);
    const user_query = {
        text: `INSERT INTO usertable(user_name,user_password,email) VALUES($1,$2,$3) RETURNING *`,
        values: [user_name,hashedPassword,email]
    }

    const client = await db.pool.connect();
    try {
        await client.query('BEGIN');

        const result = await client.query(user_query);
        console.log(result.rows[0]);

        const facult_query = {
            text: `INSERT INTO Faculty (faculty_id, user_id) VALUES($1, $2)
                                        RETURNING *`,
            values  : [faculty_id, result.rows[0].user_id],
        }

        const result2 = await client.query(facult_query);

        await client.query('COMMIT');
        const user = result.rows[0];
        const faculty = result2.rows[0];

        const response = {
            user: {
                username: user.user_name,
                email: user.email,
            },
            faculty: {
                faculty_id: faculty.faculty_id,
                faculty_name: faculty.faculty_name,
            }
        }
        return response;
        
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        throw error;

    } finally {
        client.release();

    }
};
module.exports = {createFaculty};

