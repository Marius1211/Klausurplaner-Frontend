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

function createData(stunde, montag, dienstag, mittwoch, donnerstag, freitag) {
  return { stunde, montag, dienstag, mittwoch, donnerstag, freitag };
}

const rows = [
  createData('1. 8:00 - 8:45', '-', '-', '-', '-', '-'),
  createData('2. 8:45 - 9:30', '', '', '', '', ''),
  createData('3. 9:45 - 10:30', '', '', '', '', ''),
  createData('4. 10:30 - 11:15', '', '', '', '', ''),
  createData('5. 11:30 - 12:15', '', '', '', '', ''),
  createData('6. 12:15 - 13:00', '', '', '', '', ''),
  createData('7. 13:30 - 14:15', '', '', '', '', ''),
  createData('8. 14:15 - 15:00', '', '', '', '', ''),
  createData('9. 15:10 - 15:55', '', '', '', '', ''),
  createData('10. 15:55 - 16:40', '', '', '', '', ''),
];

function Calendar() {
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
              {rows.map((row) => (
                <TableRow
                  key={row.stunde}
                  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                >
                  <TableCell component="th" scope="row" sx={{ border: 1 }}>
                    {row.stunde}
                  </TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>{row.montag}</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>{row.dienstag}</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>{row.mittwoch}</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>{row.donnerstag}</TableCell>
                  <TableCell align="right" sx={{ border: 1 }}>{row.freitag}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Divider orientation="vertical" flexItem />
      <div>

      </div>
    </div>
  );
}

export default Calendar;