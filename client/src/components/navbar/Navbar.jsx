import React, { useContext, useEffect} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHome, faPersonChalkboard, faRightFromBracket, faSignIn, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();

    const {auth,setAuth,isAdmin,setisAdmin,user_id}=useContext(ProjectsContext);

    return(
        <div className='navbar'>
            <div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faHome}/> Home</button>
                
                <button className='navbut' onClick={()=>{navigate('/projects')}}><FontAwesomeIcon icon={faFileAlt}/> Projects</button>
                
                <button className='navbut' onClick={()=>{navigate('/guides')}}><FontAwesomeIcon icon={faPersonChalkboard}/> Guides</button>
                
                {isAdmin && (<button className='navbut' onClick={()=>{navigate('/admin')}}><FontAwesomeIcon icon={faUserSecret}/> Admin Page</button>)}

                {auth && !isAdmin && (<button className='navbut' onClick={()=>{navigate(`/guide/${user_id}`)}}><FontAwesomeIcon icon={faUserSecret}/> Profile</button>)}
            </div>

            {auth ? (<div className='admin'>
                <button className='navbut' onClick={()=>{setAuth(false); setisAdmin(false); localStorage.removeItem('token');}}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</button>
            </div>) :
            (<div className='admin'>
                <button className='navbut' onClick={()=>{navigate('/login')}}><FontAwesomeIcon icon={faSignIn}/> Login</button>
            </div>)}
        </div>
    );
}

export default Navbar;