import React, { useState } from 'react';
import './addguide.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Addguide = () => {

    const [user_id,setuser_id]=useState("");
    const [user_password,setuser_passwor]=useState("");
    const [email,setemail]=useState("");

    const {addGuide}=useContext(ProjectsContext);
   
    const submitForm = async(e)=>{
        e.preventDefault();

        const token = localStorage.getItem('token');

        try{
            const response = await baseurl.post("/auth/create",{
              user_id,
              user_password,
              user_type :'faculty',
              isadmin:false,
              email},
              {
                headers:
                {
                    'authorization' : `Bearer ${token}`
                }
              }
            );
            addGuide(response.data[0]);
            console.log(response);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <>
            <div className='addguide'>
                <h1>Project Guides</h1>
                <div className='inputform'>
                        <input className='guideinput' type="text" value={user_id} onChange={e=>setuser_id(e.target.value)} placeholder="ID"/>
            
                        <input className='guideinput' type="text" value={user_password} onChange={e=>setuser_passwor(e.target.value)} placeholder="password"/>
                       
                        <input className='guideinput' type="text" value={email} onChange={e=>setemail(e.target.value)} placeholder="email"/>

                        <button className='guidebut' type="submit"  onClick={submitForm}>Add</button> 
                </div>
            </div>
        </>
    );
}

export default Addguide;