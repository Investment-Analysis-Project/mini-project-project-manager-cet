import React, { useState } from 'react';
import './addproject.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fileuploader from '../fileuploader/Fileuploader'
import { faFile, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Addproject = () => {
    const [pro_id,setpro_id]=useState("");
    const [pro_title,setpro_title]=useState("");
    const [pro_desc,setpro_desc]=useState("");
    const [domain1,setdomain1]=useState("");
    const [program,setprogram]=useState("");
    const [grad_year,setgrad_year]=useState("");
    const [guide_id,setguide_id]=useState("");
    const [mem_1,setmem_1]=useState("");
    const [mem_2,setmem_2]=useState("");
    const [mem_3,setmem_3]=useState("");
    const [mem_4,setmem_4]=useState("");
    const [pro_status,setpro_status]=useState("");
    const [abstract_link,setabstract_link]=useState("");
    const [report_link,setreport_link]=useState("");
    const [hosted_link,sethosted_link]=useState("");
    const [code_link,setcode_link]=useState("");
    
    const {addProject,abstract_url,setab_Url,report_url,setreport_Url,hosted_url,sethosted_Url,code_url,setcode_Url}=useContext(ProjectsContext);

    let pro_domains=[];

    const submitForm = async(e)=>{
        e.preventDefault();

        pro_domains=[...pro_domains,domain1];

        const token = localStorage.getItem('token');

        try{
            const response = await baseurl.post("/projects",{
                pro_id,
                pro_title,
                pro_desc,
                pro_domains,
                program,
                grad_year,
                guide_id,
                mem_1,
                mem_2,
                mem_3,
                mem_4,
                pro_status,
                abstract_link:abstract_url,
                report_link:report_url,
                hosted_link:hosted_url,
                code_link:code_url},
                {
                    headers:{
                        'authorization' : `Bearer ${token}`
                    }
                }
            );
            addProject(response.data[0])
            console.log(response);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <>
            <div className='addproject'>
                <h1>Add Project</h1>
                <div className='projectenter'>
                   
                        <input className='inp' type="text" value={pro_id} onChange={e=>setpro_id(e.target.value)} placeholder="ID"/>
                   
                        <input className='inp' type="text" value={pro_title} onChange={e=>setpro_title(e.target.value)} placeholder="Title"/>                
                   
                        <input className='inp' type="text" value={pro_desc} onChange={e=>setpro_desc(e.target.value)} placeholder="Desc"/>
                
                        <input className='inp' type="text" value={domain1} onChange={e=>setdomain1(e.target.value)} placeholder="Domain"/>
                        
                        <input className='inp' type="text" value={program} onChange={e=>setprogram(e.target.value)} placeholder="Program"/>
                                                       
                        <input className='inp' type="text" value={grad_year} onChange={e=>setgrad_year(e.target.value)} placeholder="Grad_Year"/>

                        <input className='inp' type="text" value={guide_id} onChange={e=>setguide_id(e.target.value)} placeholder="Guide"/>

                        <input className='inp' type="text" value={mem_1} onChange={e=>setmem_1(e.target.value)} placeholder="mem 1"/>

                        <input className='inp' type="text" value={mem_2} onChange={e=>setmem_2(e.target.value)} placeholder="mem 2"/>

                        <input className='inp' type="text" value={mem_3} onChange={e=>setmem_3(e.target.value)} placeholder="mem 3"/>

                        <input className='inp' type="text" value={mem_4} onChange={e=>setmem_4(e.target.value)} placeholder="mem 4"/>

                        <input className='inp' type="text" value={pro_status} onChange={e=>setpro_status(e.target.value)} placeholder="Completed"/>
                             
                        <button type="submit" className='but' onClick={submitForm}><FontAwesomeIcon icon={faFileCirclePlus}/> Add</button>
        
                </div>

                <div className='filecomponent'>
                    <Fileuploader/>
                </div>
            </div> 
        </>
    );
}

export default Addproject;