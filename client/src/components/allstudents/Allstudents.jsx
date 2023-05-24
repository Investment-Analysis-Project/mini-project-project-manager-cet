import React, { useContext, useEffect } from 'react';
import './allstudents.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';

const Allstudents = (props) => {

   const {students,setStudents}=useContext(ProjectsContext);

   const navigate=useNavigate();

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            const response = await baseurl.get("/students");
            setStudents(response.data);
            console.log(response.data);
            console.log(students);
        }catch(err){
            console.log(err)
        }
    };
        fetchData();
  },[]);

    return(
    <div className='allstudents'>
        <div className='studentcontainer'>
            <table className="table table-striped table-dark">

            <thead>
                <tr className='bg-primary'>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Team</th>
                </tr>
            </thead>

            <tbody>
            {students.map((res,i)=>{
                return(
                <tr key={i}>
                <td>{res.s_id}</td>
                <td>{res.name}</td>
                <td id='teammem' onClick={()=>{navigate(`/team/${res.team_id}`)}}>{res.team_id}</td>
                </tr>)
            })}
            </tbody>

            </table>
        </div>
    </div>
    )
}

export default Allstudents;