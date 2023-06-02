import React, { useState } from 'react';
import './addproject.css';
import baseurl from '../../baseurl/baseurl';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fileuploader from '../fileuploader/Fileuploader'
import { faFile, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Addproject = () => {
    // const [p_id,setp_id]=useState("");
    // const [p_name,setp_name]=useState("");
    // const [p_desc,setp_desc]=useState("");
    // const [team_id,setteam_id]=useState("");
    // const [domain,setdomain]=useState("");
    // const [completed,setcompleted]=useState("");
    // const [abstract,setabstract]=useState("");
    
    // const {addProject,url,loged}=useContext(ProjectsContext);

    // const submitForm = async(e)=>{
    //     e.preventDefault();

    //     try{
    //         const response = await baseurl.post("/projects",{
    //             p_id,
    //             p_name,
    //             p_desc,
    //             team_id,
    //             domain,
    //             completed,
    //             abstract:url
    //         });
    //         addProject(response.data[0])
    //         console.log(response.data[0]);
    //     }catch(err){
    //         console.log(err);
    //     }
    // };

    // return(
    //     <>
    //         {loged ? (<div className='addproject'>
    //             <div className='inputform'>
                   
    //                     <input className='inp' type="text" value={p_id} onChange={e=>setp_id(e.target.value)} placeholder="ID"/>
                   
    //                     <input className='inp' type="text" value={p_name} onChange={e=>setp_name(e.target.value)} placeholder="Name"/>                
                   
    //                     <input className='inp' type="text" value={p_desc} onChange={e=>setp_desc(e.target.value)} placeholder="Desc"/>
                
    //                     <input className='inp' type="text" value={team_id} onChange={e=>setteam_id(e.target.value)} placeholder="Team_Id"/>
                         
    //                     <input className='inp' type="text" value={domain} onChange={e=>setdomain(e.target.value)} placeholder="Domain"/>
                              
    //                     <input className='inp' type="text" value={completed} onChange={e=>setcompleted(e.target.value)} placeholder="Completed"/>
                             
    //                     <button type="submit" className='but' onClick={submitForm}><FontAwesomeIcon icon={faFileCirclePlus}/> Add</button>
        
    //             </div>

    //             <div className='filecomponent'>
    //                 <Fileuploader/>
    //             </div>
    //         </div>) : <></>}  
    //     </>
    // );
}

export default Addproject;