import React , { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from './Data';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import CreateQuestion from './CreateQuestion';



function BasicTable() {
    const params = useParams();
    console.log("params: ", params.topicName);

    const ind = Data.findIndex(element => {
        if (_.kebabCase(element.topic) === params.topicName) {
            return true;
        }
        return false;
    });
    console.log("index: ", ind);

    const [rows, setRows] = useState(Data[ind].list);

    function addQuestion(question) {
        // setRows(question);

        setRows(prevQuestion => [...prevQuestion, question]);
        Data[ind].list.push(question);
    }

    return (
        <>
            <CreateQuestion index={ind} onAdd={addQuestion} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Index</TableCell>
                            <TableCell align="left">Questions</TableCell>
                            <TableCell align="left">Links</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Note</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{index + 1}</TableCell>
                                <TableCell align="left">{row.question}</TableCell>
                                <TableCell align="left"><a href={row.link} target="_blank" rel="noreferrer noopener">Click</a></TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                                <TableCell align="left">{row.note}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default BasicTable;

// import CallMadeIcon from '@mui/icons-material/CallMade';