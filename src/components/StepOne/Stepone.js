import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './stepone.scss';
import MenuItem from '@mui/material/MenuItem';


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
        <div >
          <TextField
            style={{ width: '90%' }}
            id="outlined-basic"
            label="Xarici passport nömrəsi"
            defaultValue="13453243A"
            variant="outlined" />
          <TextField
            id="date"
            label="Doğum tarixi"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className='div' style={{ width: '100%', display: 'flex', margin: '0 auto' }}>
            <TextField
              style={{ width: '30%' }}
              id="outlined-select-currency"
              select
              label="Telefon nömrəsi"
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
            style={{ width: '90%' }}
            id="outlined-basic"
            variant="outlined" />
          </div>
        </div>
        <div>
          <TextField id="outlined-basic" label="Soyadı, adı, ata adı" variant="outlined" />
          <TextField
            id="outlined-select-currency"
            select
            label="Vətandaşlığlı"
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
