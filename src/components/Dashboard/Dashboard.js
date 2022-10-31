import React from 'react';
import './dashboard.scss';
import enovbeLogo from '../../assets/dgk-logo-hd.png';
import { AiFillInfoCircle } from 'react-icons/ai';
import { RiNotification3Fill } from 'react-icons/ri';
import { FaUserPlus, FaUserCircle, FaUserAlt, FaUserTie } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { BiCommentDots } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';
import { GiConvergenceTarget } from 'react-icons/gi';
import { Maincontext, useContext } from '../../context';
const Dashboard = () => {
    const { sidebar } = useContext(Maincontext)
    return (
        <div id='dashboard' className={!sidebar ? 'dashboard' : 'dashboard active'}>
            <h1 className='logoTitle'>
                <img src={enovbeLogo} alt='e-novbeLogo' />
                <span>E-customs</span>
            </h1>
            <div className='privateOffice'>
                <h2>Şəxsi Kabinet</h2>
                <ul>
                    <li><AiFillInfoCircle className='icon' /><span>Məlumatlarım</span></li>
                    <li><RiNotification3Fill className='icon' /><span>Bildirişlər</span></li>
                    <li><FaUserCircle className='icon' /><span>Şəxsi hesab vərəqəsi</span></li>
                    <li><FaUserPlus className='icon' /><span>İstifadəçilər</span></li>
                    <li><AiFillStar className='icon' /><span>Seçilmiş xidmətlərim</span></li>
                </ul>
            </div>
            <div className='privateOffice'>
                <h2>Əsas Xidmətlər</h2>
                <ul>
                    <li><FaUserAlt className='icon' /><span>Fiziki şəxslər üçün</span></li>
                    <li><FaUserTie className='icon' /><span>XİF iştirakçıları üçün </span></li>
                    <li><ImUsers className='icon' /><span>Təşkilatlar üçün</span></li>
                    <li><TiInfoLargeOutline className='icon' /><span>Açıq məlumatlar</span></li>
                    <li><GiConvergenceTarget className='icon' /><span>Qeydiyyatsız xidmətlər</span></li>
                    <li><BiCommentDots className='icon' /><span>Rəy və təkliflər</span></li>
                    <li><FiLogIn className='icon' /><span>Daxil ol</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard