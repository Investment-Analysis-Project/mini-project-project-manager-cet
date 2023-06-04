import React, { useContext, useEffect } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import baseurl from '../../baseurl/baseurl';

const Profile = () => {
    const{isAdmin,auth,user_id,setCurr_guide_name,setCurr_designation}=useContext(ProjectsContext);

    const navigate = useNavigate();

    const {id}=useParams();

    const [faculty_id,setfaculty_id]=useState("yyyy");
    const [faculty_name,setfaculty_name]=useState("");
    const [designation,setdesignation]=useState("");
    const [email,setemail]=useState("");
    const [aof,setaof]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response1=await baseurl.get(`/faculty/${id}`);
                const response2 =await baseurl.get(`/user/email/${id}`);
                setfaculty_id(response1.data[0].faculty_id);
                setfaculty_name(response1.data[0].faculty_name);
                setdesignation(response1.data[0].designation);
                setemail(response2.data[0].email);
                setaof(response1.data[0].area_of_interest);

                setCurr_guide_name(response1.data[0].faculty_name);
                setCurr_designation(response1.data[0].designation);
            }catch(err)
            {
                console.log(err);
            }
        };
        fetchData();
    },[]);


     
    return(
        <div className='profile'>
           <h1>Profile Page</h1>
           <div className='profiledetails'>
                <input className='proin' type="text" readOnly value={faculty_id}/>
                <input className='proin' type="text" readOnly value={faculty_name}/>
                <input className='proin' type="text" readOnly value={designation}/>
                <input className='proin' type="text" readOnly value={email}/>
                <span>{aof}</span>
                {auth && (id===user_id || isAdmin) &&(<button className='profbut' onClick={()=>{navigate(`/editguide/${id}`)}}>Profile</button>)}
           </div>
        </div>
    )
}

export default Profile;