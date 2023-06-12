const createError = require('../utils/error');
const jwt=require('jsonwebtoken');
const db = require('../db');


const login = async(req,res,next)=>{
    try{
        const {user_name,user_password}=req.body;

        const user = await db.query('SELECT * FROM Usertable where user_name=$1',[user_name]);
        if(user.rowCount===0) return next(createError(404,"User not found"));   
     
        const password_row = await db.query('SELECT * FROM Usertable where user_name=$1 AND user_password=$2',[user_name,user_password]);
        if(password_row.rowCount===0) return next(createError(404,"Incorrect password"));

        const user_log={
            user_id:user.rows[0].user_id,
            user_name:user.rows[0].user_name,
            isadmin:user.rows[0].isadmin
        }

        const token=jwt.sign(user_log,process.env.JWT);
        
        //res.json({auth:true,token:token,user_id:user.rows[0].user_id,isadmin:user.rows[0].isadmin});
        res.json({auth:true,token:token});
    }catch(err){
        console.log(err);
    }
};

const create = async(req,res)=>{
    try{
        const {user_name,email,faculty_id} = req.body;
        const {rows} = await db.query('INSERT INTO Usertable (user_name,email) values ($1,$2) RETURNING user_id',[user_name,email]);
        const results = await db.query('INSERT INTO Faculty (faculty_id,user_id) values ($1,$2) RETURNING *',[faculty_id,rows[0].user_id]);
        res.json(results.rows[0]);
    }catch(err){
        console.log(err);
    }
}

module.exports = {login,create};
