const db = require('../db');
const model = require('../models/faculty');
const auth_function = require('../utils/auth');

const getAllfaculty = async(req,res)=>{
    try{
        const {rows} = await db.query('SELECT * FROM Faculty ORDER BY user_id');
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};

const getbyidFaculty = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT * FROM Faculty where user_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
};


const getuseridFaculty = async(req,res)=>{
    try{
        const {id}=req.params;
        const {rows} = await db.query('SELECT user_id FROM Faculty where faculty_id=$1',[id]);
        res.json(rows);
    }catch(err){
        console.log(err);
    }
}

const addFaculty = async(req,res)=>{

    try{
        const {user_name,email,faculty_id,password} = req.body;
        if (await auth_function.checkUsername(user_name) == true){
            return res.status(400).json({ error: 'Username already exists' });
        }

        if (await auth_function.checkEmail(email) == true){
            return res.status(400).json({ error: 'Email already exists' });
        }

        if (await auth_function.checkFacultyId(faculty_id) == true){
            return res.status(400).json({ error: 'Faculty already exists' });
        }

        const rows = await model.createFaculty(user_name,password,email,faculty_id);
        // console.log(rows);

        res.json(rows);

    }catch(err){
    }
};

const updateFaculty = async(req,res)=>{
    try{
        const {id}=req.params;
        const {faculty_name,designation,experience,contact,area_of_interest}=req.body;
        const {rows} = await db.query('UPDATE Faculty SET faculty_name=$2,designation=$3,experience=$4,contact=$5,area_of_interest=$6 WHERE user_id=$1 RETURNING *',[id,faculty_name,designation,experience,contact,area_of_interest]);
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

module.exports = {getAllfaculty,getbyidFaculty,addFaculty,updateFaculty,deleteFaculty,getuseridFaculty};