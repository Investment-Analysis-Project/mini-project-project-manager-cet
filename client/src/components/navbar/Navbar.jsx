import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <h1 onClick={()=>{navigate('/')}}>This Navbar</h1>
        </div>
    );
}

export default Navbar;