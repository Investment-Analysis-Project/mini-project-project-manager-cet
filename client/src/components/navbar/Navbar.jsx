import React, { useContext, useEffect} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Navbar = () => {
    const {loged,setLoged}=useContext(ProjectsContext);

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}>Home</button>
                <button className='navbut' onClick={()=>{navigate('/students')}}>Students</button>
                <button className='navbut' onClick={()=>{navigate('/guides')}}>Guides</button>
                <button className='navbut' onClick={()=>{navigate('/teams')}}>Teams</button>
            </div>
            {loged ? 
                (<div className='admin'>
                    <button className='navbut' onClick={()=>{setLoged(false)}}>Logout</button>
                </div>)  : 
                
                (<div className='admin'>
                    <button className='navbut' onClick={()=>{navigate('/login')}}>Admin View</button>
                </div>)}
        </div>
    );
}

export default Navbar;