
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './_steptwo.scss';

const currencies = [
    {
        value: '+994',
        label: 'Azərbaycan',
    },
    {
        value: '+90',
        label: 'Turkiye',
    },
    {
        value: '+1',
        label: 'Amerika',
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
}));

export default function Stepone() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <Box
            style={{ backgroundColor: '#fff', marginTop: '30px', border: '1px solid #eaeaea', padding: '20px', borderRadius: '10px' }}
            component="form"
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                        <TextField style={{ width: '100%' }} id="outlined-basic" label="Nəqliyyatın növü" variant="outlined" />
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                        <TextField style={{ width: '100%' }} id="outlined-basic" label="Markası" variant="outlined" />
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                        <TextField style={{ width: '100%' }} id="outlined-basic" label="Dövlət qeydiyyat nişanı" variant="outlined" />
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                        <TextField
                            style={{ width: '100%' }}
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
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                        <TextField style={{ width: '100%' }} id="outlined-basic" label="Qeydiyyatda olduğu ölkə*" variant="outlined" />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
