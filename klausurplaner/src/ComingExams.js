import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import './ComingExams.css'
import DrawerSidebar from './DrawerSidebar'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function ComingExams(props) {

  //Url von den Daten aus dem Frontend
const EXAMS_REST_API_URL = 'http://localhost:8080/exams';
//useState Hook für ExamsArray
const [exams, setExams] = useState([]);

//Zieht sich die Daten von der URL und speicher diese in den aktuellen State
const getExams = () => {
  axios.get(EXAMS_REST_API_URL,)
    .then(response => {
      console.log('API response:', response.data);
      setExams(response.data);
    })
    .catch(error => console.error('Error fetching exams:', error));
};


    useEffect(() => {
        getExams();
    },[]);
    

  return (
    <div>
      <DrawerSidebar header="Anstehende Klausuren" />
      <div id="examview">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ border: 1 }}>
                  <TableCell sx={{ border: 1 }}>ExamId</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>Klasse</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>Stunde</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>Fach</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>Thema</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>Sonstiges</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exams.map(exam => (
                  <TableRow>
                    <TableCell sx={{ border: 1 }}>{exam.id}</TableCell>
                    <TableCell sx={{ border: 1 }}>{exam.classname}</TableCell>
                    <TableCell sx={{ border: 1 }}>{exam.stunde}</TableCell>
                    <TableCell sx={{ border: 1 }}>{exam.subject}</TableCell>
                    <TableCell sx={{ border: 1 }}>{exam.topic}</TableCell>
                    <TableCell sx={{ border: 1 }}>{exam.sonstiges}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}

export default ComingExams;