import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Addstudent from '../../components/addstudent/Addstudent';
import Allstudents from '../../components/allstudents/Allstudents';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Students = () => {
    const {loged}=useContext(ProjectsContext);
    
    return (
      <div className='guides'>
        <Navbar/>
        {loged && <>
          <Addstudent/>
          <Allstudents/>
        </>}
      </div>
    )
}

export default Students;