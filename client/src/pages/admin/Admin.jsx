import React, { useContext, useEffect, useState } from 'react';
import './admin.css';
import Navbar from '../../components/navbar/Navbar';
import Addproject from '../../components/addproject/Addproject';
import Addguide from '../../components/addguide/Addguide';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Admin = () => {
    const {user_id}=useContext(ProjectsContext);
    const [email,setemail]=useState("");

    const token = localStorage.getItem('token');

    useEffect(()=>{
        const fetchData =async()=>{
            try{
            const response = await baseurl.get(`/user/email/${user_id}`);
            setemail(response.data[0].email);
        }catch(err){
            console.log(err)
            }
        };
        fetchData();
    },[]);

    return(
        <div>
            <Navbar/>
            <div className='adminprofile'>
                <span>{user_id}</span>
                <span>{email}</span>
            </div>
            <Addproject/>
            <Addguide/>
        </div>
    )
}

export default Admin;