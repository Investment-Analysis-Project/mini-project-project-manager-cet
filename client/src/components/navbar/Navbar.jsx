import React, { useContext, useEffect} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faHome, faPeopleGroup, faPersonChalkboard, faRightFromBracket, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const {loged,setLoged}=useContext(ProjectsContext);

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}><FontAwesomeIcon icon={faHome}/> Home</button>
                <button className='navbut' onClick={()=>{navigate('/guides')}}><FontAwesomeIcon icon={faPersonChalkboard}/> Guides</button>
                <button className='navbut' onClick={()=>{navigate('/teams')}}><FontAwesomeIcon icon={faPeopleGroup}/> Teams</button>
                {loged && <button className='navbut' onClick={()=>{navigate('/students')}}><FontAwesomeIcon icon={faChild}/> Students</button>}
            </div>
            {loged ? 
                (<div className='admin'>
                    <button className='navbut' onClick={()=>{setLoged(false)}}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</button>
                </div>)  : 
                
                (<div className='admin'>
                    <button className='navbut' onClick={()=>{navigate('/login')}}><FontAwesomeIcon icon={faUserSecret}/> Admin</button>
                </div>)}
        </div>
    );
}

export default Navbar;