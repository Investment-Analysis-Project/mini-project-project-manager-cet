import React from 'react';
import './carousel.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHome, faPersonChalkboard, faRightFromBracket, faSignIn, faUserSecret } from '@fortawesome/free-solid-svg-icons';


const Carousel = () => {

    return(
        <>
            <div className='carousel'>
                <div className='roww'>
                    <div className='content'>
                        <h1>WELCOME TEXT</h1>
                        <div className='desc'>Welcome to the project management system of CSE departmant,<br></br>
                         where you can find previous year projects, guides, and also check the similarity of your abstracts.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Carousel;
