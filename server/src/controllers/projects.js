const db = require('../db');

const getAllProjects = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM projects');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidProject = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM projects where p_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addProject = async(req,res)=>{
    try{
        const {p_id,p_name,p_desc,team_id,domain,completed,abstract} = req.body;
        const { rows } = await db.query('INSERT INTO projects VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',[p_id,p_name,p_desc,team_id,domain,completed,abstract]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const updateProject = async(req,res)=>{
    try{
        const {id}=req.params;
        const {p_name,p_desc,team_id,domain,completed,abstract}=req.body;
        const {rows} = await db.query('UPDATE projects SET p_name=$2,p_desc=$3,team_id=$4,domain=$5,completed=$6,abstract=$7 WHERE p_id=$1 RETURNING *',[id,p_name,p_desc,team_id,domain,completed,abstract]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const deleteProject = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('DELETE FROM projects WHERE p_id=$1 RETURNING *',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllProjects,getidProject,addProject,updateProject,deleteProject};