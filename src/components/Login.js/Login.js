import React from 'react';
import './logins.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <div className='login'>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Daxil ol →</Button>
            </Stack>
        </div>
    )
}

export default Login