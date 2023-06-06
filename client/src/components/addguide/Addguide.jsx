import React, { useState } from 'react';
import './addguide.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Addguide = () => {

    const [user_id,setuser_id]=useState("");
    const [user_password,setuser_passwor]=useState("");
    const [email,setemail]=useState("");

    const {addGuide,setCurr_aof}=useContext(ProjectsContext);
   
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
            setCurr_aof([]);
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
                        <div className='inputuserdet'>
                            <label className='inputuserdetlab'>Username</label>
                            <input className='guideinput' type="text" value={user_id} onChange={e=>setuser_id(e.target.value)} placeholder="ID"/>
                        </div>
                        <div className='inputuserdet'>
                            <label className='inputuserdetlab'>Password</label>
                            <input className='guideinput' type="text" value={user_password} onChange={e=>setuser_passwor(e.target.value)} placeholder="Password"/>
                        </div>
                        <div className='inputuserdet'>
                            <label className='inputuserdetlab'>Email</label>
                            <input className='guideinput' type="text" value={email} onChange={e=>setemail(e.target.value)} placeholder="Email"/>
                        </div>
                </div>
                <button className='guidebut' type="submit"  onClick={submitForm}><FontAwesomeIcon icon={faFileCirclePlus}/> Add</button> 
            </div>
        </>
    );
}

export default Addguide;