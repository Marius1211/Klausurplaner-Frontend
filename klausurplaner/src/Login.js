import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Container, Button } from '@mui/material';
import './Login.css';


function Login(props) {
    return (
            <div id='login-panel'>
            <Grid container direction={'column'} spacing={2} justifyContent="center" alignItems="left">
                <Grid xs={14}>
                    <TextField className="input-login" id="input-email" label="Email-Adresse" variant='outlined'/>
                    <Button id="toggle-password">show</Button>
                </Grid>
                <Grid xs={12}>
                    <TextField className="input-login" id="input-password" label="Email-Adresse" variant='outlined'/>
                </Grid >
                <Grid>
                    <Button id="button-login" variant='outlined'>Login</Button>
                </Grid>
            </Grid>


            </div>
    );
}

export default Login;