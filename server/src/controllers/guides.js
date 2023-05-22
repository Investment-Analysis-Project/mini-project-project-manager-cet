const db = require('../db');

const getAllGuides = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM guides');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllGuides};