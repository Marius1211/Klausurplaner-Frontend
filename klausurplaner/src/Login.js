import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Container } from '@mui/material';
import './Login.css';


function Login(props) {
    return (
        <div>
            <Container id='login-panel'>
                <Grid container spacing={2}>

                        <Grid xs={4}>
                            <TextField id="input-login" label="Email-Adresse" variant='outlined'/>
                            <button>Test</button> 
                        </Grid>
                        <Grid xs={4}>
                            <button>Test</button> 
                        </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default Login;