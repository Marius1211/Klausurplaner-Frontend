import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import ExamService from "../services/ExamService";
import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer, Paper } from '@mui/material';

function ExamComponent (props) {

    //Url von den Daten aus dem Frontend
    const EXAMS_REST_API_URL = 'http://localhost:8080/exams';

    //useState Hook für ExamsArray
    const [exams, setExams] = useState([]);

    //Zieht sich die Daten von der URL und speicher diese in den aktuellen State
    const getExams = () => {
        axios.get(EXAMS_REST_API_URL,).then(response => setExams(response.data));
    };

    /*
    useEffect(() => {
        getExams();
    },[]);
    */
        
        return (
            <div>
                <h1>Klausuren</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow sx={{ border: 1 }}>
                            <TableCell key={"5"} sx={{ border: 1 }}>Stunde</TableCell>
                            <TableCell key={"6"} align="right" sx={{ border: 1 }}>ExamId</TableCell>
                            <TableCell key={"7"} align="right" sx={{ border: 1 }}>Klasse</TableCell>
                            <TableCell key={"8"} align="right" sx={{ border: 1 }}>Fach</TableCell>
                            <TableCell key={"9"} align="right" sx={{ border: 1 }}>Thema</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {exams.map(
                                exams =>
                                <TableRow>
                                    {/* Hier werden die Daten aus dem Backend genutzt */}
                                    <TableCell key={"0"}>{exams.id}</TableCell>
                                    <TableCell key={"2"}>{exams.classname}</TableCell>
                                    <TableCell key={"3"}>{exams.subject}</TableCell>
                                    <TableCell key={"4"}>{exams.topic}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
}

export default ExamComponent;