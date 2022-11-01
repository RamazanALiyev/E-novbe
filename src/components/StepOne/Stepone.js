import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './stepone.scss';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

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
      <Grid container rowSpacing={2} columnSpacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item xs={12} md={6}>
          <Item>
            <TextField
              style={{ width: '100%' }}
              id="outlined-basic"
              label="Xarici passport nömrəsi"
              defaultValue="13453243A"
              variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <TextField style={{ width: '100%' }} id="outlined-basic" label="Soyadı, adı, ata adı" variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <TextField
              style={{ width: '100%' }}
              id="date"
              label="Doğum tarixi"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <TextField
              style={{ width: '100%' }}
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
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <TextField
              style={{ width: '100%' }}
              id="outlined-basic"
              label="Telefon nömrəsi"
              variant="outlined" />
          </Item>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>

        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <Button sx={{ width: '150px', fontSize: '8px', marginTop: '10px' }} variant="contained">
            kodu sms-lə göndər
          </Button>
        </Item>
      </Grid>
    </Box>
  );
}
