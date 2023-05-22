const db = require('../db');

const getAllStudents = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM students');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidStudent = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM students where s_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addStudent = async(req,res)=>{
    try{
        const {s_id,name,team_id} = req.body;
        const { rows } = await db.query('INSERT INTO students VALUES ($1,$2,$3) RETURNING *',[s_id,name,team_id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const updateStudent = async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,team_id}=req.body;
        const {rows} = await db.query('UPDATE students SET name=$2,team_id=$3 WHERE S_id=$1 RETURNING *',[id,name,team_id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const deleteStudent = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('DELETE FROM students WHERE s_id=$1 RETURNING *',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllStudents,getidStudent,addStudent,updateStudent,deleteStudent};