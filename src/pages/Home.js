import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import APIEndpoints from '../exts/Endpoints';
import {GenerateAPIHeaders} from '../exts/Helpers';
import Loading from '../components/Loading';
import AnimatedNumberContainer from '../components/AnimatedNumberContainer';

export default function Home(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        axios.get(APIEndpoints.Homepage, {
            headers: GenerateAPIHeaders() 
        })
        .then((resp) => {
            setData(resp.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            <Grid container spacing={3}>
                {data.map(item => (
                    <Grid item md={item.w * 2} lg={item.w} xs={12} key={"msg-" + item.id}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.title} gutterBottom>
                                {item.title}
                            </Typography>
                            { item.animated && item.format !== "string" ? (
                                <Typography variant="h4" className={classes.animatedNumber}>
                                    <AnimatedNumberContainer 
                                        value={item.desc}
                                        format={item.precision}
                                    />
                                    { item.format === "percentage" ? "%" : null}
                                    { item.format === "seconds" ? "s" : null}
                                </Typography>
                            ) : (
                                <Typography variant="body2">
                                    {item.desc}
                                </Typography>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    loading: {
        color: theme.palette.secondary.main,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        textAlign: "center",
    }
  }));