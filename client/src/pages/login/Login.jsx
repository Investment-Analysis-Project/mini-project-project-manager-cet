import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import Navbar from '../../components/navbar/Navbar';
import baseurl from '../../baseurl/baseurl';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Login = () => {
    const [username,setUsuername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const {loged,setLoged}=useContext(ProjectsContext);

    let value="";

    const navigate=useNavigate();

    const loginSubmit = async(e) =>{
        e.preventDefault();

        if(username===""||password===""){
            setMessage("Missing Credentials");
            return;
        }

        try{
            const response = await baseurl.post("/auth/login",{
                username,
                password
             });
            value=response.data.isLoged

            if(!value){
                setMessage("Login Failed !!!");
                return;
            }
            setLoged(value);
            navigate('/');
        }catch(err){
            console.log(err);
        }   
    }

    return(
        <>
            <Navbar/>
            <div className='login'>
                <h1>Admin Login</h1>
                <div className='loginform'>
                    <div className='logintext'>
                        <span>Username</span>
                        <input type="text" className='loginput' value={username} onChange={(e)=>setUsuername(e.target.value)}/>
                    </div>

                    <div className='logintext'>
                        <span>Password</span>
                        <input type="text" className='loginput' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <span>{message}</span>

                    <button className='logbut' onClick={loginSubmit}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login;