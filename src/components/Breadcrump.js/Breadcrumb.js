import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './breadcrumb.scss'
import { useNavigate, useLocation } from 'react-router-dom';



export default function BasicBreadcrumbs() {
    const navigate = useNavigate();
    const location = useLocation();
    function handleClick(event) {
        event.preventDefault();
        navigate('/')
    }
    return (
        <div className='breadCrumb' role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                <Link onClick={handleClick} style={{ color: '#000', fontWeight: 700 }} underline="hover" href="/">E-növbə</Link>
                {location.pathname !== '/' ? <Typography>elektron növbə</Typography> : null}
            </Breadcrumbs>
        </div>
    );
}