import React from 'react';
import './projects.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import AllProjects from '../../components/allprojects/AllProjects';
import Addproject from '../../components/addproject/Addproject';


export const Projects = () => {

    return(
        <>
            <Navbar/>
            <Header/>
            <Addproject/>
            <AllProjects/>
        </>
    );
}
