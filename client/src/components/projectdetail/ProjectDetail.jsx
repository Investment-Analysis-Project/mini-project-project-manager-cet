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
            <form className='outputform'>
                <div class="form-group">
                    <input type="text" class="form-control" value={p_id}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={p_name}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={p_desc}/>
                </div>
                <div class="form-group">
                    <input id='nexteam' type="text" class="form-control"  value={team_id} onClick={()=>{navigate(`/team/${team_id}`)}}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={domain}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={completed}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={abstract}/>
                </div>
            </form>
        </div>
    )
}

export default ProjectDetail;