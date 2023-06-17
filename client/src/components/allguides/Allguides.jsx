import React, { useContext, useEffect } from 'react';
import './allguides.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

const Allguides = (props) => {

    const {guides,setGuides,skill}=useContext(ProjectsContext);

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
    console.log(filteredguides);

    if (skill !== "All"){
        filteredguides = filteredguides.filter((item)=>
        item.area_of_interest && item.area_of_interest.includes(skill));
    }

    return(
        <div className='allguides'>
            <div className='guidecontainer'>
                
                {filteredguides.map((res,i)=>{
                    if(filteredguides[i].area_of_interest){ 
                        return(
                            <div className='guideitem' key={res.user_id} id="projectpointer" onClick={()=>navigate(`/guide/${res.user_id}`)}>
                                <span className='guide-name'>{res.faculty_name}</span>
                                <span className='guide-id'>{res.faculty_id}</span>
                                <span className='guide-desg'>{res.designation} <FontAwesomeIcon icon={faPersonChalkboard}/></span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Allguides;


{/* <table className="table table-striped table-dark">

                <thead>
                    <tr className='bg-primary'>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                    </tr>
                </thead>

                <tbody>
                {filteredguides.map((res,i)=>{
                    if(filteredguides[i].area_of_interest){
                    return(
                    <tr key={res.user_id} id="projectpointer" onClick={()=>navigate(`/guide/${res.user_id}`)}>
                    <td>{res.faculty_id}</td>
                    <td>{res.faculty_name}</td>
                    <td>{res.designation}</td>
                    </tr>)}
                })}
                </tbody>

                </table> */}
// return(
// <tr key={res.user_id} id="projectpointer" onClick={()=>navigate(`/guide/${res.user_id}`)}>
// <td>{res.faculty_id}</td>
// <td>{res.faculty_name}</td>
// <td>{res.designation}</td>
// </tr>)}