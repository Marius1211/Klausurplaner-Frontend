import React from 'react';
import './ClassOverview.css';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PersistentDrawerLeft from './DrawerSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ClassOverview() {
        const EXAMS_REST_API_URL = 'http://localhost:8080/klasse';
    const [klassen, setKlassen] = useState([]);

    const getKlassen = () => {
        axios.get(EXAMS_REST_API_URL)
            .then(response => {
                console.log('API response:', response.data);
                setKlassen(response.data);
            })
            .catch(error => console.error('Error fetching exams:', error));
    };

    useEffect(() => {
        getKlassen();
    }, []);

    return (
        <div id="overview">
            <PersistentDrawerLeft header='Klassenverwaltung' />
            <div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ border: 1 }}>Klasse</TableCell>
                                    <TableCell align="right" sx={{ border: 1 }}>Anzahl Schüler</TableCell>
                                    <TableCell align="right" sx={{ border: 1 }}>Klassenraum</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {klassen.map(klasse => (
                                    <TableRow>
                                        <TableCell sx={{ border: 1 }}>{klasse.klassenbezeichnung}</TableCell>
                                        <TableCell sx={{ border: 1 }}>{klasse.anzSchueler}</TableCell>
                                        <TableCell sx={{ border: 1 }}>{klasse.klassenraum}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
            <div className="button-container">
                <Button variant='outlined'>Klasse hinzufügen</Button>
                <Button variant='outlined'>Klasse entfernen</Button>
                <Button variant='outlined'>Teilnehmer hinzufügen</Button>
                <Button variant='outlined'>Teilnehmer entfernen</Button>
            </div>
        </div>

    );
}

export default ClassOverview;