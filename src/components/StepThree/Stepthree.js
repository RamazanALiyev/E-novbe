import * as React from 'react';
import './_stepthree.scss';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
}));

export default function Stepthree() {
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
          <Item sx={{ boxShadow: 0 }}>
            <TextField style={{ width: '100%' }} id="outlined-basic" label="İstiqamət" variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ boxShadow: 0 }}>
            <TextField style={{ width: '100%' }} id="outlined-basic" label="Markası" variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ boxShadow: 0 }}>
            <TextField style={{ width: '100%' }} id="outlined-basic" label="Sərhəddən keçəcəyiniz vaxtı qeyd edin" variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ boxShadow: 0 }}>
            <TextField style={{ width: '100%' }} id="outlined-basic" label="Gəlmə Vaxtı" variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ boxShadow: 0 }}>
            <TextField style={{ width: '100%' }} id="outlined-basic" label="Keçəcəyiniz Dövlət Sərhəd Buraxılış məntəqəsi" variant="outlined" />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ boxShadow: 0 }}>
            <TextField
              style={{ width: '100%' }}
              id="outlined-basic"
              label="Ödəniş(AZN)"
              defaultValue="5 AZN"
              variant="outlined" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

