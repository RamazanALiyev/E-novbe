import React from 'react';
import './logins.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { Maincontext, useContext } from '../../context'

const Login = () => {
    const { sidebar, setSidebar } = useContext(Maincontext)
    const openSidebar = () => {
        setSidebar(true)
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    const closeSidebar = () => {
        setSidebar(false)
        document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
    return (
        <div className='login'>
            {!sidebar ? <GiHamburgerMenu className='hamburger icon' onClick={openSidebar} /> : <AiOutlineFullscreenExit onClick={closeSidebar} className='cross icon' />}
            <Stack spacing={2} direction="row">
                <Button variant="contained">Daxil ol →</Button>
            </Stack>
        </div>
    )
}

export default Login