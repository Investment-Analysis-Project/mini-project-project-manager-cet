// This file contains code for hashing passwords and comparing them.
// These Functions can be used for creating and logging into the accounts.

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

const checkUsername = async (username) => {
    try{
        const query = 'SELECT COUNT(*) FROM Usertable WHERE username = $1';
        const result = await db.query(query,[username]);

        const count = parseInt(result.rows[0].count) 
        return count > 0;

    }catch(error){
        console.log(error);
        throw error;
    }
}

const checkEmail = async (email) => {
    try {
        const query = 'SELECT COUNT(*) FROM Usertable WHERE email = $1';
        const result = await db.query(query,[email]);
    
        // If the count is greater than 0, the email already exists
        const count = parseInt(result.rows[0].count) 
        return count > 0;

      } catch (error) {
        console.error('Error checking email:', error);
        throw error;
      }
}

const checkFacultyId = async (faculty_id) => {
    try {
        const query = 'SELECT COUNT(*) FROM Faculty WHERE faculty_id = $1';
        const result = await db.query(query,[faculty_id]);
    
        // If the count is greater than 0, the email already exists
        const count = parseInt(result.rows[0].count) 
        return count > 0;

      } catch (error) {
        console.error('Error checking id:', error);
        throw error;
      }
}

module.exports = {hashPassword, comparePassword, checkUsername, checkEmail, checkFacultyId}