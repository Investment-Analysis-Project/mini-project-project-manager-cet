import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Home = () => {
    const navigate = useNavigate();

    return(
        <>
            <Navbar/>
            <div className='homecontainer'>
                <div className='homeintro'>
                    <h1>Welcome to Project Management System</h1>   
                    <p>
                        Welcome to the project management system of CSE departmant, where you can find
                        previous year projects, guides, and also check the similarity 
                        of your abstracts.
                    </p>
                </div>
                <div className='homemenu'>
                    <div className='homeitem' onClick={()=>navigate('/projects')}>
                        <img src={img1} alt="" />
                        <p>See Projects</p>
                    </div>

                    <div className='homeitem' onClick={()=>navigate('/guides')}>
                        <img src={img2} alt="" />
                        <p>See Guides</p>
                    </div>

                    <div className='homeitem' onClick={()=>navigate('/')}>
                        <img src={img3} alt="" />
                        <p>Search Similar Abstracts</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;