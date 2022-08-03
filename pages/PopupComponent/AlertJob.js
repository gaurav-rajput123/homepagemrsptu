import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertJob({setShow}) {
  return (
    <Stack className='alertjob' sx={{ width: '32%', position:'fixed', top:'15%', right:'35%', zIndex:'100000', backgroundColor: '#edf7ed', borderRadius: '15px' }} spacing={2}>
      <Alert onClose={() => setShow(false)}
       sx={{height:'110px', textAlign:'center', alignItems: 'center', justifyContent: 'center', fontSize: '14px'}}>You need to buy a course to apply for this job.</Alert>
    </Stack>
  );
}
