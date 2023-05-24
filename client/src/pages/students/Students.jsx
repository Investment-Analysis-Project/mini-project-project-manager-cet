import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Addstudent from '../../components/addstudent/Addstudent';
import Allstudents from '../../components/allstudents/Allstudents';

const Students = () => {
    return (
      <div className='guides'>
        <Navbar/>
        <Addstudent/>
        <Allstudents/>
      </div>
    )
}

export default Students;