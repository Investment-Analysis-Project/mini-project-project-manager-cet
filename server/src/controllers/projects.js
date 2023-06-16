const db = require('../db');

const getAllProjects = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * from Project');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidProject = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM Project where pro_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidfacultyProject = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM Project where guide_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addProject = async(req,res)=>{
    try{
        const {pro_title,pro_desc,pro_domains,program,grad_year,guide_id,mem_1,mem_2,mem_3,mem_4,pro_status,abstract_link,
            report_link,hosted_link,code_link} = req.body;
        
        const { rows } = await db.query('INSERT INTO Project (pro_title,pro_desc,pro_domains,program,grad_year,guide_id,mem_1,mem_2,mem_3,mem_4,pro_status,abstract_link,report_link,hosted_link,code_link) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *',
        [pro_title,pro_desc,pro_domains,program,grad_year,guide_id,mem_1,mem_2,mem_3,mem_4,pro_status,abstract_link,
        report_link,hosted_link,code_link]);

        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const updateProject = async(req,res)=>{
    try{
        const {id}=req.params;
        const {pro_desc,pro_domains,pro_status,abstract_link,report_link,hosted_link,code_link}=req.body;
        const {rows} = await db.query('UPDATE Project SET pro_desc=$2,pro_domains=$3,pro_status=$4,abstract_link=$5,report_link=$6,hosted_link=$7,code_link=$8 WHERE pro_id=$1 RETURNING *',[id,pro_desc,pro_domains,pro_status,abstract_link,report_link,hosted_link,code_link]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const deleteProject = async(req,res)=>{
    try{
        
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllProjects,getidProject,addProject,updateProject,deleteProject,getidfacultyProject};