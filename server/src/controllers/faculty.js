const db = require('../db');
const model = require('../models/faculty');
const auth_function = require('../utils/auth')

const getAllfaculty = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM Faculty');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getuseridFaculty = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query(`SELECT faculty_id,faculty_name,designation,
                                        area_of_interest,experince,email,contact
                                        FROM Faculty, Usertable where faculty_id=$1 and 
                                        Faculty.user_id = Usertable.user_id`,[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const addFaculty = async(req,res)=>{

    try{
        const {username,password,email,faculty_id,faculty_name,designation,area_of_interest,
            experience,contact}=req.body;

        
        if (await auth_function.checkUsername(username) == true){
            return res.status(400).json({ error: 'Username already exists' });
        }

        if (await auth_function.checkEmail(email) == true){
            return res.status(400).json({ error: 'Email already exists' });
        }

        if (await auth_function.checkFacultyId(faculty_id) == true){
            return res.status(400).json({ error: 'Faculty already exists' });
        }
        const rows = await model.createFaculty(username,password,email,faculty_id,faculty_name,
                                                designation,area_of_interest,experience,contact);
        console.log(rows);

        res.json(rows);

    }catch(err){
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
       res.send("delete faculty may cause error in other tables");
    }catch(err){
        console.log(err);
    }
};

module.exports = {getAllfaculty,getidFaculty,addFaculty,updateFaculty,deleteFaculty,getuseridFaculty};