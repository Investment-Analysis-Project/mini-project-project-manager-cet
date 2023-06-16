import React from 'react';
import './projects.css';
import Navbar from '../../components/navbar/Navbar';
import Carousel from '../../components/carousel/Carousel'
import ProjectFilter from '../../components/projectfilter/ProjectFilter';
import AllProjects from '../../components/allprojects/AllProjects';

export const Projects = () => {

    return(
        <>
            <Navbar/>
            <Carousel/>
            <ProjectFilter/>
            <AllProjects/>
        </>
    );
}
