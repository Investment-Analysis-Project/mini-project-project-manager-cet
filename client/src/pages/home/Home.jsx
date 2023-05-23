import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import AllProjects from '../../components/allprojects/AllProjects';
import Addproject from '../../components/addproject/Addproject';


export const Home = () => {

    return(
        <>
            <Navbar/>
            <Header/>
            <Addproject/>
            <AllProjects/>
        </>
    );
}
