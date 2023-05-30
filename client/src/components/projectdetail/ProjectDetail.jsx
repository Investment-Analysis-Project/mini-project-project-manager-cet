import React, { useEffect, useState } from 'react';
import './projectdetail.css';
import baseurl from '../../baseurl/baseurl';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ProjectDetail=()=>{
    const [p_id,setp_id]=useState("");
    const [p_name,setp_name]=useState("");
    const [p_desc,setp_desc]=useState("");
    const [team_id,setteam_id]=useState("");
    const [domain,setdomain]=useState("");
    const [completed,setcompleted]=useState("");
    const [abstract,setabstract]=useState("");

    const { id }=useParams();

    const navigate = useNavigate();

    useEffect(()=>{
            const fetchData =async()=>{
                try{
                const response = await baseurl.get(`/projects/${id}`);
                console.log(response.data[0]);
                setp_id(response.data[0].p_id);
                setp_name(response.data[0].p_name);
                setp_desc(response.data[0].p_desc);
                setteam_id(response.data[0].team_id);
                setdomain(response.data[0].domain);
                setcompleted(response.data[0].completed);
                setabstract(response.data[0].abstract);
            }catch(err){
                console.log(err)
                }
            };
            fetchData();
        },[id]);


    return(
        <div className='projectdetail'>
            <h1>Project Details</h1>
            <div className='outputform'>
                    <div className='detitem'>
                    <label className='lab' htmlFor="aa">Project ID</label>
                    <input type="text" name='aa' className="formcontrol" value={p_id}/>
                    </div>

                    <div className='detitem'>
                    <label className='lab' htmlFor="bb">Project Name</label>
                    <input type="text" name='bb' className="formcontrol" value={p_name}/>
                    </div>

                    <div className='detitem'>
                    <label className='lab' htmlFor="cc">Project Description</label>
                    <div className="formcontroldesc">{p_desc}</div>
                    </div>

                    <div className='detitem'>
                    <label className='lab' htmlFor="dd">Team ID</label>
                    <input id='nexteam' name='dd' type="text" className="formcontrol"  value={team_id} onClick={()=>{navigate(`/team/${team_id}`)}}/>
                    </div>

                    <div className='detitem'>
                    <label className='lab' htmlFor="ee">Domain</label>
                    <input type="text" name='ee' className="formcontrol" value={domain}/>
                    </div>

                    <div className='detitem'>
                    <label className='lab' htmlFor="ff">Status</label>
                    <input type="text" name='ff' className="formcontrol" value={completed}/>
                    </div>

                    <div className='detitem'>
                    <label className='lab' htmlFor="gg">View Abstract</label>
                    <input type="text" name='gg' className="formcontrol" id='ablink' value={abstract} onClick={()=>{window.open(abstract)}}/>
                    </div>
            </div>   
        </div>
    )
}

export default ProjectDetail;