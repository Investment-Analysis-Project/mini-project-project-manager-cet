import React, { useContext, useEffect } from 'react';
import './allguides.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';

const Allguides = (props) => {

    const {guides,setGuides,skill,setSkill}=useContext(ProjectsContext);

    const navigate=useNavigate();

    let filteredguides=[];

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

    filteredguides = guides;

    if (skill !== "All"){
        filteredguides = filteredguides.filter((item)=>item.area_of_interest.includes(skill));
    }

    return(
        <div className='allguides'>
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
                {filteredguides.map((res)=>{
                    return(
                    <tr key={res.faculty_id}>
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