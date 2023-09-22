import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Button, Checkbox } from '@mui/material';
import './Login.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import DrawerSidebar from './DrawerSidebar';


function Login() {
    return (
        <div id='login-panel'>
            <DrawerSidebar header="Login"/>
            <Grid container direction={'column'} spacing={2} justifyContent="center" alignItems="left">
                <Grid xs={14}>
                    <TextField className="input-login" id="input-email" label="Email-Adresse" variant='outlined'/>
                </Grid>
                <Grid xs={12}>
                    <TextField type='password' className="input-login" id="input-password" label="Passwort" variant='outlined'/>
                    <Checkbox icon={<Visibility/>} checkedIcon={<VisibilityOff/>}/>
                </Grid >
                <Grid>
                    <Button id="button-login" variant='outlined'>Login</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;