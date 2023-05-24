import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <button onClick={()=>{navigate('/')}}>Add Students</button>
            <button onClick={()=>{navigate('/')}}>Add Guides</button>
            <button onClick={()=>{navigate('/')}}>Add Teams</button>
        </div>
    );
}

export default Navbar;