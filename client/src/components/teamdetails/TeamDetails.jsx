import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import baseurl from '../../baseurl/baseurl';
import './teamdetails.css';

const TeamDetails = () => {
    const [t_id,setteam_id]=useState("");
    const [guide_id,setguide_id]=useState("");
    const [program,setprogram]=useState("");
    const [grad_year,setgrad_year]=useState("");

    const { id }=useParams();

    useEffect(()=>{
        const fetchData =async()=>{
            try{
            const response = await baseurl.get(`/teams/${id}`);
            console.log(response.data[0]);
            setteam_id(response.data[0].t_id);
            setguide_id(response.data[0].guide_id);
            setprogram(response.data[0].program);
            setgrad_year(response.data[0].grad_year);
        }catch(err){
            console.log(err)
            }
        };
        fetchData();
    },[id]);

  return(
    <div className='teamdetails'>
        <h1>Team Details</h1>
        <form className='teamform'>
            <div class="form-group">
                <input type="text" class="form-control" value={t_id}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={guide_id}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={program}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control"  value={grad_year}/>
            </div>
        </form>        
    </div>
  );
}

export default TeamDetails;