import React, { useContext, useEffect } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import baseurl from '../../baseurl/baseurl';

const Profile = () => {
    const{isAdmin,auth,user_id,setCurr_guide_name,setCurr_designation,setCurr_aof}=useContext(ProjectsContext);

    const navigate = useNavigate();

    let {id}=useParams();
    id=parseInt(id);


    const [faculty_id,setfaculty_id]=useState("");
    const [faculty_name,setfaculty_name]=useState("");
    const [designation,setdesignation]=useState("");
    const [email,setemail]=useState("");
    const [aof,setaof]=useState([]);
    const [project,setproject]=useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response1=await baseurl.get(`/faculty/${id}`);
                const response2 =await baseurl.get(`/user/email/${id}`);
                setfaculty_id(response1.data[0].faculty_id);
                setfaculty_name(response1.data[0].faculty_name);
                setdesignation(response1.data[0].designation);
                setemail(response2.data[0].email);
                setaof(response1.data[0].area_of_interest);

                setCurr_guide_name(response1.data[0].faculty_name);
                setCurr_designation(response1.data[0].designation);
                if(response1.data[0].area_of_interest)
                    setCurr_aof(response1.data[0].area_of_interest);
                else
                    setCurr_aof([]);
            }catch(err)
            {
                console.log(err);
            }
        };
        fetchData();
    },[]);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response=await baseurl.get(`/projects/guide/${id}`);
                setproject(response.data);     
            }catch(err)
            {
                console.log(err);
            }
        };
        fetchData();
    },[]);

    return(
        <div className='profile'>
           <h1>Profile Page</h1>
           {auth && (id===user_id || isAdmin) &&(<button className='profbut' onClick={()=>{navigate(`/editguide/${id}`)}}>Profile Edit</button>)}
            <div className='profiledetails'>
                <div className='profileeachdetail'>
                    <label htmlFor="">Guide Id</label>
                    <input className='proin' type="text" readOnly value={faculty_id}/>
                </div>

                <div className='profileeachdetail'>
                    <label htmlFor="">Guide Name</label>
                    <input className='proin' type="text" readOnly value={faculty_name}/>
                </div>

                <div className='profileeachdetail'>
                    <label htmlFor="">Designation</label>
                    <input className='proin' type="text" readOnly value={designation}/>
                </div>

                <div className='profileeachdetail'>
                    <label htmlFor="">E-Mail</label>
                    <input className='proin' type="text" readOnly value={email}/>
                </div>

                <div className='guideskill'>
                    <h2>Areas of Interest</h2>
                    {aof && aof.map((item,i)=>{
                        return(
                            <ul key={i}>
                                <li>{item}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className='guideskill'>
                    <h2>Guided Projects</h2>
                          
                    <table className='adminprofiletable'>
                        <thead>
                            <tr className='bg-primary'>
                                <th scope="col">Project ID</th>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>

                        <tbody>
                        {project && project.map((item,i)=>{
                            return(
                            <tr key={item.pro_id}>
                                <td className='guidedproject' onClick={()=>navigate(`/project/${item.pro_id}`)}>{item.pro_id}</td>
                                <td>{item.pro_title}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                 </div>           
           </div> 
        </div>
    )
}

export default Profile;