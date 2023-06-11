const db = require('../db');
const auth_funtion = require('../utils/auth')

const createFaculty = async (username, password, email, faculty_id, faculty_name,
                             designation, area_of_interest, experience, contact) => {
    const hashedPassword = await auth_funtion.hashPassword(password);
    const user_query = {
        text: `INSERT INTO Usertable(username,password,email) VALUES($1,$2,$3) RETURNING *`,
        values: [username,hashedPassword,email]
    }

    const client = await db.pool.connect();

    try {
        await client.query('BEGIN');

        const result = await client.query(user_query);

        const facult_query = {
            text: `INSERT INTO Faculty (faculty_id, user_id, faculty_name, designation,
                                        experience, contact, area_of_interest) VALUES($1, $2, $3, $4, $5, $6, $7)
                                        RETURNING *`,
            values  : [faculty_id, result.rows[0].user_id, faculty_name, designation,experience, contact, area_of_interest],
        }

        const result2 = await client.query(facult_query);

        await client.query('COMMIT');
        const user = result.rows[0];
        const faculty = result2.rows[0];

        const response = {
            user: {
                username: user.username,
                email: user.email,
            },
            faculty: {
                faculty_id: faculty.faculty_id,
                faculty_name: faculty.faculty_name,
                designation: faculty.designation,
                area_of_interest: faculty.area_of_interest,
                experience: faculty.experience,
                contact: faculty.contact,
            }
        }
        return response;
        
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;

    } finally {
        client.release();

    }
};
module.exports = {createFaculty};

