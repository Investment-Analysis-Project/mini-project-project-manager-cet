import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Addguide from '../../components/addguide/Addguide';
import Allguides from '../../components/allguides/Allguides';

const Guides = () => {
    return (
      <div className='guides'>
        <Navbar/>
        <Addguide/>
        <Allguides/>
      </div>
    )
}

export default Guides;