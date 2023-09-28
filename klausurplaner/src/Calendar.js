import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import './Calendar.css';
import PersistentDrawerLeft from './DrawerSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Funktion, welche eine Komponente erzeugt die Daten aus dem Backend
 * in Form eines Kalenders anzeigen.
 * 
 * @author Patrick Wagner
 * @returns 
 */
function Calendar() {
  //Url von den Daten aus dem Backend
  const EXAMS_REST_API_URL = 'http://localhost:8080/calendar';
  //useState Hook für calendarEintragArray
  const [calendarEintrag, setCalendarEintrag] = useState([]);
  //Zieht sich die Daten von der URL und speicher diese in den aktuellen State
  const getCalendarEintrag = () => {
    axios.get(EXAMS_REST_API_URL)
      .then(response => {
        console.log('API response:', response.data);
        setCalendarEintrag(response.data);
      })
      .catch(error => console.error('Error fetching exams:', error));
  };

  useEffect(() => {
    getCalendarEintrag();
  }, []);

  const getDayColumn = (day) => {
    switch (day) {
      case 'Montag':
        return 1;
      case 'Dienstag':
        return 2;
      case 'Mittwoch':
        return 3;
      case 'Donnerstag':
        return 4;
      case 'Freitag':
        return 5;
      default:
        return 1;
    }
  };
  //Abhängig davon, welcher Tag angegeben ist wird die Klausur dort eingetragen
  const renderTableCells = (entry) => {
    const dayColumn = getDayColumn(entry.tag);
    const cells = [];
    for (let i = 1; i <= 5; i++) {
      if (i === dayColumn) {
        cells.push(
          <TableCell key={i} sx={{ border: 1 }}>
            {entry.klausurArt}
          </TableCell>
        );
      } else {
        cells.push(<TableCell key={i} sx={{ border: 1 }} />);
      }
    }
    return cells;
  };

  return (
    <div id="calendarOverview">
      <PersistentDrawerLeft header='Kalender Übersicht' />
      <div id="calendarview">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ border: 1 }}>
                <TableCell sx={{ border: 1 }}>Stunde</TableCell>
                <TableCell align="right" sx={{ border: 1 }}>Montag</TableCell>
                <TableCell align="right" sx={{ border: 1 }}>Dienstag</TableCell>
                <TableCell align="right" sx={{ border: 1 }}>Mittwoch</TableCell>
                <TableCell align="right" sx={{ border: 1 }}>Donnerstag</TableCell>
                <TableCell align="right" sx={{ border: 1 }}>Freitag</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calendarEintrag.map((calendarEintrag_einzel) => (
                <TableRow key={calendarEintrag_einzel.id}>
                  <TableCell sx={{ border: 1 }}>{calendarEintrag_einzel.schulstunde}</TableCell>
                  {renderTableCells(calendarEintrag_einzel)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Divider orientation="vertical" flexItem />
      <div></div>
    </div>
  );
}

export default Calendar;
