const createError = require('../utils/error');
const jwt=require('jsonwebtoken');
const db = require('../db');


const login = async(req,res,next)=>{
    try{
        const {user_id,user_password}=req.body;

        const user = await db.query('SELECT * FROM Usertable where user_id=$1',[user_id]);
        if(user.rowCount===0) return next(createError(404,"User not found"));   
     
        const password_row = await db.query('SELECT * FROM Usertable where user_id=$1 AND user_password=$2',[user_id,user_password]);
        if(password_row.rowCount===0) return next(createError(404,"Incorrect password"));

        const user_log={
            user_id:user_id,
            isadmin:user.rows[0].isadmin
        }

        const token=jwt.sign(user_log,process.env.JWT);
   
        res.json({auth:true,token:token,isadmin:user.rows[0].isadmin});
    }catch(err){
        console.log(err);
    }
};

const create = async(req,res)=>{
    try{
        const {user_id,user_password,user_type,isadmin,email} = req.body;
        const {rows} = await db.query('INSERT INTO Usertable values($1,$2,$3,$4,$5) RETURNING *',[user_id,user_password,user_type,isadmin,email]);
        const {results} = await db.query('INSERT INTO Faculty values ($1)',[user_id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
}

module.exports = {login,create};
