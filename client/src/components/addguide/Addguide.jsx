import React, { useState } from 'react';
import './addguide.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Addguide = () => {

    const [g_id,setg_id]=useState("");
    const [name,setname]=useState("");
    const [areas_of_interest1,setareas_of_interest1]=useState("");
    const [areas_of_interest2,setareas_of_interest2]=useState("");

    let areas_of_interest = []
   
    const {guides,setGuides,addGuide}=useContext(ProjectsContext);

    const submitForm = async(e)=>{
        e.preventDefault();

        areas_of_interest=[...areas_of_interest,areas_of_interest1,areas_of_interest2];

        try{
            const response = await baseurl.post("/guides",{
               g_id,
               name,
               areas_of_interest
            });
            addGuide(response.data[0])
            console.log(response.data[0]);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <>
            <div className='addguide'>
                <h1>Add Guide</h1>
                <div className='inputform'>
                        <input type="text" value={g_id} onChange={e=>setg_id(e.target.value)} placeholder="ID"/>
            
                        <input type="text" value={name} onChange={e=>setname(e.target.value)} placeholder="Name"/>
                   
                        <input type="text" value={areas_of_interest1} onChange={e=>setareas_of_interest1(e.target.value)} placeholder="Skill 1"/>

                        <input type="text" value={areas_of_interest2} onChange={e=>setareas_of_interest2(e.target.value)} placeholder="Skill 2"/>

                        <button type="submit" className='btn' onClick={submitForm}>Add</button> 
                </div>
            </div>
        </>
    );
}

export default Addguide;