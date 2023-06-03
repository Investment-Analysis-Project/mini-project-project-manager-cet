import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import Navbar from '../../components/navbar/Navbar';
import baseurl from '../../baseurl/baseurl';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import Home from '../home/Home';

const Login = () => {
    const [user_id,setUserId]=useState("");
    const [user_password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const {auth,setAuth}=useContext(ProjectsContext);

    let value=false;

    const navigate=useNavigate();

    const loginSubmit = async(e) =>{
        e.preventDefault();

        if(user_id===""||user_password===""){
            setMessage("Missing Credentials !");
            return;
        }

        try{
            const response = await baseurl.post("/auth/login",{
                user_id,
                user_password
             });

            const value=response.data;

            if(!value.auth){
                setMessage(value.message);
                return;
            }
            setAuth(value.auth);
            
            if(value.isadmin) navigate('/admin');
            else navigate(`/guide/${user_id}`);

        }catch(err){
            console.log(err);
        }   
    }

    return(
        <>
            <Navbar/>
            <div className='login'>
                <h1>User Login</h1>
                {!auth ? (<div className='loginform'>
                    <div className='logintext'>
                        <span>Username</span>
                        <input type="text" className='loginput' value={user_id} onChange={(e)=>setUserId(e.target.value)}/>
                    </div>

                    <div className='logintext'>
                        <span>Password</span>
                        <input type="text" className='loginput' value={user_password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <span>{message}</span>

                    <button className='logbut' onClick={loginSubmit}>Login</button>
                </div>) : <Home/>}
            </div>
        </>
    )
}

export default Login;