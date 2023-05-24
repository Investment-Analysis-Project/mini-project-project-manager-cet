import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <div className='items'>
                <button className='navbut' onClick={()=>{navigate('/')}}>Home</button>
                <button className='navbut' onClick={()=>{navigate('/students')}}>Students</button>
                <button className='navbut' onClick={()=>{navigate('/guides')}}>Guides</button>
                <button className='navbut' onClick={()=>{navigate('/teams')}}>Teams</button>
            </div>
            <div className='admin'>
                <button className='navbut' onClick={()=>{navigate('/login')}}>Admin Login</button>
            </div>
        </div>
    );
}

export default Navbar;