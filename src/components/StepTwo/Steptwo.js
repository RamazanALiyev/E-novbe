import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './_steptwo.scss';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
        value: 'USD',
        label: '2010',
    },
    {
        value: 'EUR',
        label: '2000',
    },
    {
        value: 'BTC',
        label: '2007',
    },
    {
        value: 'JPY',
        label: '2018',
    },
];

export default function Stepone() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <Box
            style={{ width: '100%', backgroundColor: '#fff', marginTop: '30px', border: '1px solid #eaeaea', borderRadius: '10px' }}
            component="form"
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='form'>
                <div>
                    <TextField id="outlined-basic" label="Nəqliyyatın növü" variant="outlined" />
                    <TextField id="outlined-basic" label="Dövlət qeydiyyat nişanı" variant="outlined" />
                    <TextField id="outlined-basic" label="Qeydiyyatda olduğu ölkə*" variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" label="Markası" variant="outlined" />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Buraxılış ili"
                        value={currency}
                        onChange={handleChange}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
        </Box>
    );
}
