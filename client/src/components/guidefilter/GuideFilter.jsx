import React, { useContext } from 'react';
import './guidefilter.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const GuideFilter = () => {
    const {setSkill}=useContext(ProjectsContext);

    return(
    <div className='headercontainer'>
        <div className='header'>
            <h1>Search For Guides</h1>
            <div className='filter'>
                <div className='drop'>
                    <label htmlFor="skill">Area Of Interest</label>
                    <select name="skill" onChange={(e)=>setSkill(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Web App">Web App</option>
                        <option value="IoT">IoT</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    );
}

export default GuideFilter;