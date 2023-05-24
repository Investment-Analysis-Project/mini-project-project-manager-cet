import React, { useContext, useEffect } from 'react';
import './allteams.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';

const Allteams = (props) => {

   const {teams,setTeams}=useContext(ProjectsContext);

   const navigate=useNavigate();

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            const response = await baseurl.get("/teams");
            setTeams(response.data);
            console.log(response.data);
            console.log(teams);
        }catch(err){
            console.log(err)
        }
    };
        fetchData();
  },[]);

    return(
    <div className='allteams'>
        <div className='teamcontainer'>
            <table className="table table-striped table-dark">

            <thead>
                <tr className='bg-primary'>
                    <th scope="col">ID</th>
                    <th scope="col">Program</th>
                    <th scope="col">Year</th>
                </tr>
            </thead>

            <tbody>
            {teams.map((res,i)=>{
                return(
                <tr key={i}>
                <td id='teammem' onClick={()=>{navigate(`/team/${res.t_id}`)}}>{res.t_id}</td>
                <td>{res.program}</td>
                <td>{res.grad_year}</td>
                </tr>)
            })}
            </tbody>

            </table>
        </div>
    </div>
    )
}

export default Allteams;