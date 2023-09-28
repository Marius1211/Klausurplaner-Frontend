import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './AddKlausur.css';
import DrawerSidebar from './DrawerSidebar';

/**
 * Funktion, welche eine Komponente erzeugt, welche aus mehreren Eingabefeldern besteht 
 * und es dem Benutzer ermöglicht, eine Klausur hinzuzufügen oder zu bearbeiten.
 * 
 * @author Kevin Mittag
 * @returns Komponente, welche es dem Benutzer ermöglicht eingaben zu tätigen.
 */
function AddKlausur() {
    return (
        <div id="add-menue">
            <DrawerSidebar header="Klausur hinzufügen/bearbeiten"/>
            <Grid container direction={'column'} spacing={2} justifyContent="center" alignItems="left">
                <Grid item xs={30}>
                    <TextField className="input-add" id="input-class" label="Klasse" variant='outlined'/>
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={30}>
                    <TextField className="input-add" id="input-subject" label="Fach" variant='outlined'/>
                </Grid>
                <Grid item xs={30}>
                    <TextField className="input-add" id="input-topic" label="Thema" variant='outlined'/>
                </Grid>
                <Grid item xs={30}>
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
