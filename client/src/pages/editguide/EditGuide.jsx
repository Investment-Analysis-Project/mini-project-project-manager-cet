import React, { useContext } from 'react';
import './editguide.css'
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import baseurl from '../../baseurl/baseurl';

const EditGuide = () => {
    const {curr_guide_name,curr_designation,user_id,isAdmin,auth,setCurr_guide_name,setCurr_designation}=useContext(ProjectsContext);
    
    const {id}=useParams();

    const navigate=useNavigate();

    const updateprofile = async(e)=>{
        e.preventDefault();

        const token = localStorage.getItem('token');

        try{
            const response = await baseurl.put(`/faculty/${id}`,{
                faculty_name:curr_guide_name,
                designation:curr_designation },
                {
                    headers:{
                        'authorization' : `Bearer ${token}`
                    }
                }
            );

            navigate(`/guide/${id}`);
            
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
                    <input className='editin' type="text" onChange={(e)=>setCurr_guide_name(e.target.value)} placeholder={curr_guide_name}/>
                    <input className='editin' type="text" onChange={(e)=>setCurr_designation(e.target.value)} placeholder={curr_designation}/>
                    {auth && (id===user_id || isAdmin) && (<button className='editupd' onClick={updateprofile}>Update</button>)}
                </div>
            </div>
        </>
    )
}

export default EditGuide;