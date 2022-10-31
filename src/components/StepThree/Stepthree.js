import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './_stepthree.scss';

export default function Stepone() {
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
          <TextField id="outlined-basic" label="İstiqamət" variant="outlined" />
          <TextField id="outlined-basic" label="Sərhəddən keçəcəyiniz vaxtı qeyd edin" variant="outlined" />
          <TextField id="outlined-basic" label="Keçəcəyiniz Dövlət Sərhəd Buraxılış məntəqəsi" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Markası" variant="outlined" />
          <TextField id="outlined-basic" label="Gəlmə Vaxtı" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Ödəniş(AZN)"
            defaultValue="5 AZN"
            variant="outlined" />
        </div>
      </div>
    </Box>
  );
}
