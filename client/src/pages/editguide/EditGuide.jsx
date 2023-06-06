import React, { useContext, useState } from 'react';
import './editguide.css'
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import baseurl from '../../baseurl/baseurl';
import DynamicForm from '../../components/dynamicinput/DynamicInput';

const EditGuide = () => {
    const {curr_guide_name,curr_designation,user_id,isAdmin,auth,setCurr_guide_name,
        setCurr_designation,curr_aof,setCurr_aof,inputs,setInputs}=useContext(ProjectsContext);
    
    const {id}=useParams();

    const navigate=useNavigate();

    const updateprofile = async(e)=>{
        e.preventDefault();

        const aof=[...curr_aof,...inputs];

        const token = localStorage.getItem('token');

        try{
            const response = await baseurl.put(`/faculty/${id}`,{
                faculty_name:curr_guide_name,
                designation:curr_designation,
                area_of_interest:aof },
                {
                    headers:{
                        'authorization' : `Bearer ${token}`
                    }
                }
            );
            navigate(`/guide/${id}`); 
            setInputs(['Machine Learning']);  
        }catch(err){
            console.log(err);
        }
    }
    
    return(
        <>
            <Navbar/>
            <div className='editguide'>
                <h1>Profile Details</h1>
                <div className='editguidedetails'> 

                    <div className='editguideinput'>
                        <label htmlFor="name">Name</label>
                        <input name="name" className='editin' type="text" onChange={(e)=>setCurr_guide_name(e.target.value)} placeholder={curr_guide_name}/>
                    </div>

                    <div className='editguideinput'>
                        <label htmlFor="designation">Designation</label>
                        <input name="designation" className='editin' type="text" onChange={(e)=>setCurr_designation(e.target.value)} placeholder={curr_designation}/>
                    </div>

                    {/* <div className='editguideinput'>
                        <label htmlFor="skill1">Skill 1</label>
                        <input name="skill1" className='editin' type="text" onChange={(e)=>setskill1(e.target.value)} placeholder={curr_aof[0]}/>
                    </div>

                    <div className='editguideinput'>
                        <label htmlFor="skill2">Skill 2</label>
                        <input name="skill2" className='editin' type="text" onChange={(e)=>setskill2(e.target.value)} placeholder={curr_aof[1]}/>
                    </div> */}

                    <DynamicForm/>

                    {auth && (id===user_id || isAdmin) && (<button className='editupd' onClick={updateprofile}>Update</button>)}
                </div>
            </div>
        </>
    )
}

export default EditGuide;