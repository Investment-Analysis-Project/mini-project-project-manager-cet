import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Addteam from '../../components/addteam/Addteam';
import Allteams from '../../components/allteams/Allteams';


const Teams = () => {
    return (
      <div className='guides'>
        <Navbar/>
        <Addteam/>
        <Allteams/>
      </div>
    )
}

export default Teams;