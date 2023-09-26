import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Container, Button, Checkbox, Icon } from '@mui/material';
import './Login.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const backendURL = "http://localhost:8080";

function Login() {
    return (
        <div>
            <Box id="topbar" sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Login
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        <div id='login-panel'>
            <Grid container direction={'column'} spacing={2} justifyContent="center" alignItems="left">
                <Grid xs={14}>
                    <TextField className="input-login" id="input-email" label="Email-Adresse" variant='outlined' />
                </Grid>
                <Grid xs={12}>
                    <TextField type='password' className="input-login" id="input-password" label="Passwort" variant='outlined' />
                    <Checkbox icon={<Visibility />} checkedIcon={<VisibilityOff />} />
                </Grid >
                <Grid>
                    <Button id="button-login" variant='outlined' onClick={login}>Login</Button>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

const login = function(event) {
    event.preventDefault();
    const email = document.getElementById("input-email").value;
    const password = document.getElementById("input-password").value

    fetch("${backendURL}/kp/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.equals("Richtiges Passwort")) {
            window.location.href='/calendar';
        } else {
            document.getElementById("input-password").value = "";
        }
    })
};

export default Login;