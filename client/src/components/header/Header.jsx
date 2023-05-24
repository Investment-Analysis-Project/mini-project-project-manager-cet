import React, { useContext } from 'react';
import './header.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Header = () => {

    const {setDomain}=useContext(ProjectsContext);

    return(
        <div className='header'>
            <h1>Search For Projects</h1>
            <div className='filter'>
                <div className='drop'>
                    <label htmlFor="program">Program:</label>
                    <select name="program">
                        <option value="option1">All</option>
                        <option value="option1">B.TECH</option>
                        <option value="option2">M.TECH</option>
                    </select>
                </div>

                <div className='drop'>
                    <label htmlFor="year">Year:</label>
                    <select name="year">
                        <option value="option1">All</option>
                        <option value="option1">2023</option>
                        <option value="option2">2024</option>
                        <option value="option3">2025</option>
                    </select>
                </div>

                <div className='drop'>
                    <label htmlFor="domain">Domain:</label>
                    <select name="domain" onChange={(e)=>setDomain(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Web App">Web App</option>
                    </select>
                </div>

                <div className='drop'>
                    <label htmlFor="status">Staus:</label>
                    <select name="status">
                        <option value="option1">All</option>
                        <option value="option1">Completed</option>
                        <option value="option2">Ongoing</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Header;