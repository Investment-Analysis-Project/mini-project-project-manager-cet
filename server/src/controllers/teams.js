const db = require('../db');

const getAllTeams = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM teams');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidTeam = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM teams where t_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addTeam = async(req,res)=>{
    try{
        const {t_id,guide_id,program,grad_year} = req.body;
        const { rows } = await db.query('INSERT INTO teams VALUES ($1,$2,$3,$4) RETURNING *',[t_id,guide_id,program,grad_year]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const updateTeam = async(req,res)=>{
    try{
        const {id}=req.params;
        const {guide_id,program,grad_year}=req.body;
        const {rows} = await db.query('UPDATE teams SET guide_id=$2,program=$3,grad_year=$4 WHERE t_id=$1 RETURNING *',[id,guide_id,program,grad_year]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const deleteTeam = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('DELETE FROM teams WHERE t_id=$1 RETURNING *',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllTeams,getidTeam,addTeam,updateTeam,deleteTeam};