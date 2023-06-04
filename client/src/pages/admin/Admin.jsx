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
        <>
            <Navbar/>
            <div className='adminpanel'> 
                <div className='adminprofile'>
                    <h1>Admin Panel</h1>

                    <table className='adminprofiletable'>
                        <thead>
                            <tr className='bg-primary'>
                                <th scope="col">User ID</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{user_id}</td>
                                <td>{email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <Addproject/>
            <Addguide/>
        </>
    )
}

export default Admin;