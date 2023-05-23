import React, { useState } from 'react';
import './addproject.css';
import baseurl from '../../baseurl/baseurl';

const Addproject = () => {
    const [p_id,setp_id]=useState("");
    const [p_name,setp_name]=useState("");
    const [p_desc,setp_desc]=useState("");
    const [team_id,setteam_id]=useState("");
    const [domain,setdomain]=useState("");
    const [completed,setcompleted]=useState("");
    const [abstract,setabstract]=useState("");

    const submitForm = async(e)=>{
        e.preventDefault();

        try{
            const response = await baseurl.post("/projects",{
                p_id,
                p_name,
                p_desc,
                team_id,
                domain,
                completed,
                abstract
            });
            console.log(response.data);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <div className='addproject'>
        <form className='inputform'>
            <div class="form-group">
                <input type="text" class="form-control" value={p_id} onChange={e=>setp_id(e.target.value)} placeholder="ID"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={p_name} onChange={e=>setp_name(e.target.value)} placeholder="Name"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={p_desc} onChange={e=>setp_desc(e.target.value)} placeholder="Desc"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control"  value={team_id} onChange={e=>setteam_id(e.target.value)} placeholder="Team_Id"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={domain} onChange={e=>setdomain(e.target.value)} placeholder="Domain"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={completed} onChange={e=>setcompleted(e.target.value)} placeholder="Completed"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value={abstract} onChange={e=>setabstract(e.target.value)} placeholder="Abstract"/>
            </div>
            <div class="form-group">
            <button type="submit" class="btn btn-primary" onClick={submitForm}>Add</button>
            </div> 
        </form>
        </div>
    );
}

export default Addproject;