import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NumericLabel from 'react-pretty-numbers';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';

export default function MonsterStatsTable(props){
    const classes = useStyles();

    const prettyNumberParams = {
        // wholenumber: "ceil",
        justification: "L",
    }

    return (
        Object.keys(props.data).length ? (
            <div className={classes.root}>
                <TableContainer component={Card} elevation={0}>
                    <Table aria-label="monster-statistics-table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Statistic</TableCell>
                                {Object.keys(props.data.min).map((key, i) => {
                                    return <TableCell>{key}</TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(props.data).map((row, i) => {
                                return (
                                    <TableRow key={row}>
                                        <TableCell component="th" scope="row" className={classes.rowHeader}>
                                            {row}
                                        </TableCell>
                                        {Object.keys(props.data[row]).map((item, j) => {
                                            return (
                                                <TableCell key={item}>
                                                    <NumericLabel
                                                        params={prettyNumberParams}
                                                    >
                                                        {props.data[row][item]}
                                                    </NumericLabel>
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        ) : null
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        marginBottom: 10,
    },
    rowHeader: {
        color: theme.palette.secondary.main,
    }
}));