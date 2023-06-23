const db = require('../db');

const userEmail = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT email FROM Usertable where user_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const changePassword = async(req,res)=>{
    try{
        const {id}=req.params;
        const {password}=req.body;
        const {rows} = await db.query('UPDATE Usertable set user_password=$2 where user_id=$1 RETURNING *',[id,password]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

module.exports={userEmail,changePassword};