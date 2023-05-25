import React, { useState } from 'react';
import './addstudent.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Addstudent = () => {

    const [s_id,sets_id]=useState("");
    const [name,setname]=useState("");
    const [team_id,setteam_id]=useState("");
    
    const {addStudent,loged}=useContext(ProjectsContext);

    const submitForm = async(e)=>{
        e.preventDefault();

        try{
            const response = await baseurl.post("/students",{
              s_id,
              name,
              team_id
            });
            addStudent(response.data[0])
            console.log(response.data[0]);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <>
            <div className='addstudent'>
                <h1 className='studenthead'>Student List</h1>
                {loged ? (<div className='inputform'>
                        <input className='studinput' type="text" value={s_id} onChange={e=>sets_id(e.target.value)} placeholder="ID"/>
            
                        <input className='studinput' type="text" value={name} onChange={e=>setname(e.target.value)} placeholder="Name"/>
                   
                        <input className='studinput' type="text" value={team_id} onChange={e=>setteam_id(e.target.value)} placeholder="Team ID"/>

                        <button className='studbut' type="submit" onClick={submitForm}>Add</button> 
                </div>) : <></>}
            </div>
        </>
    );
}

export default Addstudent;