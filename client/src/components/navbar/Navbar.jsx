import React, { useContext, useEffect, useState} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHome, faPerson, faPersonChalkboard, faPersonCircleCheck, faRightFromBracket, faSignIn, faUserCircle, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const [profilevisible,setprofilevisible]=useState(false);

    const profileview=()=>{
        setprofilevisible(!profilevisible);
    }

    const {auth,setAuth,isAdmin,setisAdmin,user_id,setCurr_aof}=useContext(ProjectsContext);

    return(
        <div className='navbar'>
            <div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faHome}/> Home</button>
                
                <button className='navbut' onClick={()=>{navigate('/projects')}}><FontAwesomeIcon icon={faFileAlt}/> Projects</button>
                
                <button className='navbut' onClick={()=>{navigate('/guides')}}><FontAwesomeIcon icon={faPersonChalkboard}/> Guides</button>
                
            </div>

            {auth ? (<div className='admin'>
                <button className='navbut' onClick={profileview}><FontAwesomeIcon icon={faUserCircle}/> User</button>

                {profilevisible && <div className='logindropdown'>
                    <ul className='liststyle'>
                        <li>
                            {isAdmin && (<p className='profilelistitem' onClick={()=>{navigate('/adminpanel')}}><FontAwesomeIcon icon={faUserSecret}/> Admin Panel</p>)}
                            {!isAdmin && (<p className='profilelistitem' onClick={()=>{navigate(`/guide/${user_id}`)}}><FontAwesomeIcon icon={faPersonCircleCheck}/>  Profile Page</p>)}      
                        </li>
                        <li>
                            <p className='profilelistitem' onClick={()=>{setAuth(false); setisAdmin(false); localStorage.removeItem('token');navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</p>
                        </li>
                    </ul>
                </div>}

                {/* <button className='navbut' onClick={()=>{setAuth(false); setisAdmin(false); localStorage.removeItem('token');navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</button>
                {isAdmin && (<button className='navbut' onClick={()=>{navigate('/adminpanel')}}><FontAwesomeIcon icon={faUserSecret}/> Admin Page</button>)}
                {auth && !isAdmin && (<button className='navbut' onClick={()=>{navigate(`/guide/${user_id}`)}}><FontAwesomeIcon icon={faUserSecret}/> Profile</button>)}*/}
            </div>) :
            (<div className='admin'>
                <button className='navbut' onClick={()=>{navigate('/login')}}><FontAwesomeIcon icon={faSignIn}/> Login</button>
            </div>)}
        </div>
    );
}

export default Navbar;