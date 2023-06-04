import React, { useContext, useEffect, useState } from 'react';
import './allprojects.css';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const AllProjects = (props) => {

   const {domain,status,year,program}=useContext(ProjectsContext);
   const [projects,setProjects]=useState([]);

    let navigate = useNavigate();

    let filteredprojects=[];

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            const response = await baseurl.get("/projects");
            setProjects(response.data);
        }catch(err){
            console.log(err)
        }
    };
        fetchData();    
  },[]);

    filteredprojects = projects;

    if (domain !== "All"){
        filteredprojects = filteredprojects.filter((item)=>item.pro_domains.includes(domain));
    }

    if (program !== "All"){
        filteredprojects = filteredprojects.filter((item)=>item.program===program);
    }

    if (year !== "All"){
        filteredprojects = filteredprojects.filter((item)=>item.grad_year===parseInt(year));
    }

    if (status !== "All"){
        if(status==="true"){
        filteredprojects = filteredprojects.filter((item)=>item.pro_status===true);
        }

        if(status==="false"){
        filteredprojects = filteredprojects.filter((item)=>item.pro_status===false);
        }
    }

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
            {filteredprojects.map((res,i)=>{
                return(
                <tr key={res.pro_id}  onClick={()=>navigate(`/project/${res.pro_id}`)} id="projectpointer">
                <td>{res.pro_id}</td>
                <td>{res.pro_title}</td>
                <td>
                    {res.pro_domains.map((item,i)=>{
                        return(
                            <div key={i}>
                                <span>{item}</span>
                                <br></br>
                            </div>
                        );
                    })}
                </td>
                <td>{res.pro_status ? "Completed" : "Ongoing"}</td>
                </tr>);
            })}
            </tbody>

            </table>
        </div>
    </div>
    )
}

export default AllProjects;