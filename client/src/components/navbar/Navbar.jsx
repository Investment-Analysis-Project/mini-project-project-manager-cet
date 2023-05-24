import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <button onClick={()=>{navigate('/students')}}>Students</button>
            <button onClick={()=>{navigate('/guides')}}>Guides</button>
            <button onClick={()=>{navigate('/teams')}}>Teams</button>
        </div>
    );
}

export default Navbar;