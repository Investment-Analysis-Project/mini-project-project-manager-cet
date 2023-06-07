const db = require('../db');

const getAllfaculty = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM Faculty');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getidFaculty = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query(`SELECT faculty_id,faculty_name,designation,
                                        area_of_interest,experince,email,contact
                                        FROM Faculty, Usertable where faculty_id=$1 and Faculty.user_id = Usertable.user_id`,[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addFaculty = async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
    }
};

const updateFaculty = async(req,res)=>{
    try{
        const {id}=req.params;
        const {faculty_name, designation, area_of_interest, experience, contact}=req.body;
        const {rows} = await db.query(`UPDATE Faculty SET faculty_name=$2,designation=$3,
                                        area_of_interest=$4, experince=$5, contact=$7
                                        WHERE faculty_id=$1 RETURNING *`,
                                        [id,faculty_name,designation,area_of_interest, experience, contact]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};


const deleteFaculty = async(req,res)=>{
    try{
       
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllfaculty,getidFaculty,addFaculty,updateFaculty,deleteFaculty};