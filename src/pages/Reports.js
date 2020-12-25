import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

export default function Cairos(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.grid}>
                    <Grid item md={5} lg={5} xs={12} key={"generate-report"} className={classes.subgrid}>
                        <CardActionArea component={Link} to={'/reports/generate/'}>
                            <Card className={classes.card}>
                                <Typography variant="h2" color="secondary" className={classes.text}>Generate report</Typography>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid item md={2} lg={2} xs={12} key={"or"} className={classes.subgrid}>
                        <Typography color="secondary" variant="h1">OR</Typography>
                    </Grid>
                    <Grid item md={5} lg={5} xs={12} key={"generate-report"} className={classes.subgrid}>
                        <CardActionArea component={Link} to={'/reports/old/'}>
                            <Card className={classes.card}>
                                <Typography variant="h2" color="secondary" className={classes.text}>Check old reports</Typography>
                            </Card>
                        </CardActionArea>
                    </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 10,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        display: "flex",
        justifyContent: "center",
    },
    grid: {
        [theme.breakpoints.down('sm')]: {
            width: "inherit",
            margin: "inherit",
        },
        height: "calc(100vh - 80px)",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    moveForward: {
        marginLeft: theme.spacing(4),
    },
    link: {
        textDecoration: "none",
        color: theme.palette.secondary.main,
    },
    subgrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "100%",
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
    }
  }));