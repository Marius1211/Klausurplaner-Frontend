import React from 'react';
import './ClassOverview.css';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'className', label: 'Klasse', minWidth: 100 },
    { id: 'students', label: 'Anzahl Schüler', minWidth: 100 },
    { id: 'classroom', label: 'Klassenraum', minWidth: 100 },
  ];

function createData(className, students, classroom) {
    return { className, students, classroom };
}

const rows = [
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
    createData('12ITa', 20, 'C210'),
    createData('12ITb', 15, 'C209'),
    createData('12ITc', 25, 'C207'),
  ];

function ClassOverview() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  

    return (
        <div id="overview">
            <h1>Klassenverwaltung</h1>
            <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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