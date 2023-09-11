import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Container, Button } from '@mui/material';
import './Login.css';


function Login(props) {
    return (
            <Container id='login-panel'>
            <Grid container direction={'column'} spacing={2}>
                <Grid>
                    <TextField className="input-login" id="input-email" label="Email-Adresse" variant='outlined'/>
                </Grid>
                <Grid>
                    <TextField className="input-login" id="input-password" label="Email-Adresse" variant='outlined'/>
                </Grid>
                <Grid xs={1}>
                    <Button variant='outlined'>Login</Button>
                </Grid>
            </Grid>


            </Container>
    );
}

export default Login;