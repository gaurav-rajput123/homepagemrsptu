import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts({setShow}) {
  return (
    <Stack sx={{ width: '40%', position:'fixed', top:'13%', right:'30%', zIndex:'100000' }} spacing={2}>
      <Alert onClose={() => setShow(false)}
       sx={{height:'50px', textAlign:'center'}}>Request Sent</Alert>
      {/* <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert> */}
    </Stack>
  );
}
