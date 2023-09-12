import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Container, Button, Checkbox, Icon } from '@mui/material';
import './Login.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';


function Login(props) {
    return (
            <div id='login-panel'>
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