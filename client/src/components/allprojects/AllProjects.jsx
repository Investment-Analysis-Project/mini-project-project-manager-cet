import React, { useContext, useEffect } from 'react';
import './allprojects.css';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const AllProjects = (props) => {

   const {projects,setProjects}=useContext(ProjectsContext);

    let navigate = useNavigate();

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            const response = await baseurl.get("/projects");
            setProjects(response.data);
            console.log(response.data);
            console.log(projects);
        }catch(err){
            console.log(err)
        }
    };
        fetchData();
  },[]);

    return(
    <div className='allprojects'>
        <div className='projectcontainer'>
            <table className="table table-striped table-dark">

            <thead>
                <tr className='bg-primary'>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>

            <tbody>
            {projects.map((res,i)=>{
                return(
                <tr key={i}>
                <td onClick={()=>navigate(`/project/${res.p_id}`)} id="projectpointer">{res.p_id}</td>
                <td>{res.p_name}</td>
                <td>{res.domain}</td>
                <td>{res.completed ? "Finished" : "Ongoing"}</td>
                </tr>);
            })}
            </tbody>

            </table>
        </div>
    </div>
    )
}

export default AllProjects;