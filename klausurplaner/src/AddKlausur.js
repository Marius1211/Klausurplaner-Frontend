import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, TextField } from '@mui/material';
import './AddKlausur.css';

function AddKlausur() {
    return (
        <div id="add-menue">
            <h2>Neue Klausur hinzufüegen</h2>
            <Grid container direction={'column'} spacing={2} justifyContent="center" alignItems="left">
                <Grid item xs={14}>
                    <TextField className="input-add" id="input-class" label="Klasse" variant='outlined'/>
                </Grid>
                <Grid item xs={14}>
                    <TextField className="input-add" id="input-date" label="Datum" variant='outlined'/>
                </Grid>
                <Grid item xs={14}>
                    <TextField className="input-add" id="input-subject" label="Fach" variant='outlined'/>
                </Grid>
                <Grid item xs={14}>
                    <TextField className="input-add" id="input-topic" label="Thema" variant='outlined'/>
                </Grid>
                <Grid item xs={14}>
                    <TextField className="input-add" id="input-more" label="Sonstige Infos" variant='outlined'/>
                </Grid>
            </Grid>
            <div className="button-container">
                <Button variant='outlined'>Speichern</Button>
                <Button variant='outlined'>Abbrechen</Button>
            </div>
        </div>
    );
}

export default AddKlausur;
