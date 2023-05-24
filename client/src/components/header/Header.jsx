import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className='header'>
            <h1>Search For Projects</h1>
            <div className='filter'>
                <div className='drop'>
                    <label for="program">Program:</label>
                    <select name="program">
                        <option value="option1">B.TECH</option>
                        <option value="option2">M.TECH</option>
                    </select>
                </div>

                <div className='drop'>
                    <label for="program">Year:</label>
                    <select name=''>
                        <option value="option1">2023</option>
                        <option value="option2">2024</option>
                        <option value="option3">2025</option>
                    </select>
                </div>

                <div className='drop'>
                    <label for="program">Domain:</label>
                    <select name=''>
                        <option value="option1">Machine Learning</option>
                        <option value="option2">Blockchain</option>
                        <option value="option3">Web App</option>
                    </select>
                </div>

                <div className='drop'>
                    <label for="program">Staus:</label>
                    <select name=''>
                        <option value="option1">Completed</option>
                        <option value="option2">Ongoing</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Header;