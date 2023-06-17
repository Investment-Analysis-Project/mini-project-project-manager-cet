import React, { useContext, useEffect, useState } from 'react';
import './admin.css';
import Navbar from '../../components/navbar/Navbar';
import Addproject from '../../components/addproject/Addproject';
import Addguide from '../../components/addguide/Addguide';
import baseurl from '../../baseurl/baseurl';
import Addbulkguide from '../../components/addbulkguide/Addbulkguide';
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
        <>
            <Navbar/>
            <div className='adminpanel'>
                <h2>Admin Panel</h2>
                <div className='adminprofile'>
                    <div className='adminoptions'>
                        <span>Add a new project</span>
                    </div>

                    <div className='adminoptions'>
                        <span>Add a new guide</span>
                    </div>

                    <div className='adminoptions'>
                        <span>Upload Excel file</span>
                    </div> 

                    <div className='adminoptions'>
                        <span>View a guide</span>
                    </div> 

                    <div className='adminoptions'>
                        <span>Upload Excel file</span>
                    </div> 

                    <div className='adminoptions'>
                        <span>Upload Excel file</span>
                    </div> 
                </div>
            </div>
            
            <Addproject/>
            <Addguide/>
            <Addbulkguide/>
        </>
    )
}

export default Admin;