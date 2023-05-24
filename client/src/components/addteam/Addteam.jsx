import React, { useState } from 'react';
import './addteam.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Addteam = () => {
    const [t_id,sett_id]=useState("");
    const [guide_id,setguide_id]=useState("");
    const [program,setprogram]=useState("");
    const [grad_year,setgrad_year]=useState("");
    
    const {addTeam}=useContext(ProjectsContext);

    const submitForm = async(e)=>{
        e.preventDefault();

        try{
            const response = await baseurl.post("/teams",{
              t_id,
              guide_id,
              program,
              grad_year
            });
            addTeam(response.data[0])
            console.log(response.data[0]);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <>
            <div className='addteam'>
                <h1>Add Student</h1>
                <div className='inputform'>
                        <input type="text" value={t_id} onChange={e=>sett_id(e.target.value)} placeholder="ID"/>
                        <input type="text" value={guide_id} onChange={e=>setguide_id(e.target.value)} placeholder="Guide Id"/>
                        <input type="text" value={grad_year} onChange={e=>setgrad_year(e.target.value)} placeholder="Grad Year"/>
                        <input type="text" value={program} onChange={e=>setprogram(e.target.value)} placeholder="Program"/>
                        <button type="submit" classguide_id='btn' onClick={submitForm}>Add</button> 
                </div>
            </div>
        </>
    );
}

export default Addteam;