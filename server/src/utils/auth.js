// This file contains code for hashing passwords and comparing them
// These Functions can be used for creating and logging into the accounts
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = 10;
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

const comparePassword = async (password,hash) => {
    const isMatch = await bcrypt.compare(password,hash);
    return isMatch;
}

module.exports = {hashPassword,comparePassword}