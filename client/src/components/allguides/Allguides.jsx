import React, { useContext, useEffect } from 'react';
import './allguides.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';

const Allguides = (props) => {

   const {guides,setGuides}=useContext(ProjectsContext);

   const navigate=useNavigate();

    useEffect(()=>{
        const fetchData =async()=>{
        try{
            const response = await baseurl.get("/faculty");
            setGuides(response.data);
            console.log(response.data);
        }catch(err){
            console.log(err)
        }
    };
        fetchData();
  },[]);

    return(
    <div className='allguides'>
        <h1>List Of Guides</h1>
        <div className='guidecontainer'>
            <table className="table table-striped table-dark">

            <thead>
                <tr className='bg-primary'>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                </tr>
            </thead>

            <tbody>
            {guides.map((res)=>{
                return(
                <tr key={res.g_id}>
                <td onClick={()=>navigate(`/guide/${res.faculty_id}`)}>{res.faculty_id}</td>
                <td>{res.faculty_name}</td>
                <td>{res.designation}</td>
                </tr>)
            })}
            </tbody>

            </table>
        </div>
    </div>
    )
}

export default Allguides;