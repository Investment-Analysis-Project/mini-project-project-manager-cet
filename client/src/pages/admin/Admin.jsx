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

    const [anp,setanp]=useState(true);
    const [ang,setang]=useState(false);
    const [abg,setabg]=useState(false);
    const [sg,setsg]=useState(false);
    
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
                <h1>Admin Panel</h1>
                <div className='adminprofile'>
                    <div className='adminoptions' onClick={()=>{setanp(true);setang(false);setabg(false);setsg(false)}}>
                        <span>Add a new project</span>
                    </div>

                    <div className='adminoptions' onClick={()=>{setanp(false);setang(true);setabg(false);setsg(false)}}>
                        <span>Add a new guide</span>
                    </div>

                    <div className='adminoptions' onClick={()=>{setanp(false);setang(false);setabg(true);setsg(false)}}>
                        <span>Upload Excel file</span>
                    </div> 

                    <div className='adminoptions' onClick={()=>{setanp(false);setang(false);setabg(false);setsg(true)}}>
                        <span>Search Guide</span>
                    </div> 
                </div>
            </div>
            
            {anp && <Addproject/>}
            {ang && <Addguide/>}
            {abg && <Addbulkguide/>}
        </>
    )
}

export default Admin;