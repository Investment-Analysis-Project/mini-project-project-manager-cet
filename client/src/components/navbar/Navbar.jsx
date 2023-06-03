import React, { useContext, useEffect} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartColumn, faChild, faFile, faFileAlt, faHome, faPeopleGroup, faPersonChalkboard, faRightFromBracket, faSignIn, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();

    const {auth,setAuth}=useContext(ProjectsContext);

    return(
        <div className='navbar'>
            <div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faHome}/> Home</button>
                <button className='navbut' onClick={()=>{navigate('/projects')}}><FontAwesomeIcon icon={faFileAlt}/> Projects</button>
                <button className='navbut' onClick={()=>{navigate('/guides')}}><FontAwesomeIcon icon={faPersonChalkboard}/> Guides</button>
            </div>
            {auth ? (<div className='admin'>
                <button className='navbut' onClick={()=>{setAuth(false)}}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</button>
            </div>) :
            (<div className='admin'>
                <button className='navbut' onClick={()=>{navigate('/login')}}><FontAwesomeIcon icon={faSignIn}/> Login</button>
            </div>)}
        </div>
    );
}

export default Navbar;