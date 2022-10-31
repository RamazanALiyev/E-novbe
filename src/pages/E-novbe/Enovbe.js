import React from 'react';
import './enovbe.scss';
import Breadcrumb from '../../components/Breadcrump.js/Breadcrumb'
import Login from '../../components/Login.js/Login';
import cars from '../../assets/man-in-suit-and-tie 1.png';
import manPicLofo from '../../assets/Vector.png'
import { Link } from 'react-router-dom';
const Enovbe = () => {
  return (
    <div className='rightAll'>
      <Login />
      <Breadcrumb />
      <div className='cards'>
        <Link to='/elektronovbe' className='card'>
          <div><img src={manPicLofo} alt='pic' /></div>
          <h3>Elektron növbə</h3>
          <span>(e-Növbə)</span>
        </Link>
        <Link to='/suretlikecid' className='card'>
          <div><img src={manPicLofo} alt='pic' /></div>
          <h3>Sürətli keçid</h3>
          <span>(Fast track)</span>
        </Link>
        <Link to='/cipxidmetleri' className='card'>
          <div><img src={cars} alt='pic' /></div>
          <h3>CİP Xidmətləri</h3>
          <span>(Tezliklə)</span>
        </Link>
      </div>
    </div>
  )
}

export default Enovbe;