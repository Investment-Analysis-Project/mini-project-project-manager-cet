const bcrypt = require('bcrypt');
const db = require('../db');

const hashPassword = async (password) => {
    const salt = 10;
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

const comparePassword = async (password,hash) => {
    const isMatch = await bcrypt.compare(password,hash);
    return isMatch;
}

const createFaculty = async (username, password, email, faculty_id, faculty_name,
                             designation, area_of_interest, experience, contact) => {
    const hashedPassword = await hashPassword(password);

    const query = {
        text: `INSERT INTO Usertable(username,password,email) VALUES($1,$2,$3) RETURNING *`,
        values: [username,hashedPassword,email]
    }
}
