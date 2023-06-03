import React, { useContext, useEffect } from 'react';
import './allprojects.css';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const AllProjects = (props) => {

   const {projects,setProjects,domain,status,year,program}=useContext(ProjectsContext);

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

    let filteredprojects = projects;
        
    if (domain !== "All"){
      filteredprojects = filteredprojects.filter((item)=>item.domain===domain);
      console.log(filteredprojects);
    }

    if (program !== "All"){
        filteredprojects = filteredprojects.filter((item)=>item.program===program);
        console.log(filteredprojects);
    }

    if (year !== "All"){
        filteredprojects = filteredprojects.filter((item)=>item.grad_year===parseInt(year));
        console.log(filteredprojects);
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
                <tr key={i}  onClick={()=>navigate(`/project/${res.pro_id}`)} id="projectpointer">
                <td>{res.pro_id}</td>
                <td>{res.pro_title}</td>
                <td>
                    {res.pro_domains.map((item,i)=>{
                        return(
                            <>
                                <span key={i}>{item}</span>
                                <br></br>
                            </>
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