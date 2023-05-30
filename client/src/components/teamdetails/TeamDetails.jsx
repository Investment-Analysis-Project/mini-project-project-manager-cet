import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import baseurl from '../../baseurl/baseurl';
import './teamdetails.css';

const TeamDetails = () => {
    const [t_id,setteam_id]=useState("");
    const [guide_id,setguide_id]=useState("");
    const [program,setprogram]=useState("");
    const [grad_year,setgrad_year]=useState("");
    const [team,setteam]=useState([]);

    const { id }=useParams();

    useEffect(()=>{
        const fetchData =async()=>{
            try{
            const response = await baseurl.get(`/teams/${id}`);
            const result = await baseurl.get(`/students/team/${id}`);

            console.log(response.data[0]);
            console.log(result.data);

            setteam_id(response.data[0].t_id);
            setguide_id(response.data[0].guide_id);
            setprogram(response.data[0].program);
            setgrad_year(response.data[0].grad_year);
            setteam(result.data);

        }catch(err){
            console.log(err)
            }
        };
        fetchData();
    },[id]);

  return(
    <div className='teamdetails'>
        <h1>Team Details</h1>

        <div className='teamform'>

            <div className='teamitem'>
                <span className='teamlabel'>Team ID</span>
                <input type="text" className="formcontrol" value={t_id}/>
            </div>

            <div className='teamitem'>
                <span className='teamlabel'>Guide ID</span>
                <input type="text" className="formcontrol" value={guide_id}/>
            </div>

            <div className='teamitem'>
                <span className='teamlabel'>Program</span>
                <input type="text" className="formcontrol" value={program}/>
            </div>

            <div className='teamitem'>
                <span className='teamlabel'>Graduation Year</span>  
                <input type="text" className="formcontrol"  value={grad_year}/>
            </div>

            <div className='teamdet'>
                <span className='teamlabel'>Members</span>
                <div className='mem'>
                {team.map((mem)=>{
                    return(
                        <div className="teammem">
                            <span key={mem.s_id}>{mem.s_id}</span>
                            <span>{mem.name}</span>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>        
    </div>
  );
}

export default TeamDetails;