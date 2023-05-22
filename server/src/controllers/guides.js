const db = require('../db');

const getAllGuides = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM guides');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidGuide = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM guides where g_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addGuide = async(req,res)=>{
    try{
        const { g_id, name, areas_of_interest } = req.body;
        const { rows } = await db.query('INSERT INTO guides VALUES ($1,$2,$3) RETURNING *',[g_id, name, areas_of_interest]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const updateGuide = async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,areas_of_interest}=req.body;
        const {rows} = await db.query('UPDATE guides SET name=$2,areas_of_interest=$3 WHERE g_id=$1 RETURNING *',[id,name,areas_of_interest]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const deleteGuide = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('DELETE FROM guides WHERE g_id=$1 RETURNING *',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllGuides,getidGuide,addGuide,updateGuide,deleteGuide};