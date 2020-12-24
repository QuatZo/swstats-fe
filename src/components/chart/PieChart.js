import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import { ResponsivePie  } from '@nivo/pie'
import LazyLoad from 'react-lazyload';

export default function PieChart(props){
    const classes = useStyles();
    return (
        <div className={classes.lazyLoad}>
            <LazyLoad 
                placeholder={<Skeleton variant="rect" className={classes.pieContainer} />}
                unmountIfInvisible
                debounce={100}
            >
                <div className={classes.pieContainer}>
                    <Typography variant="h5" color='secondary' className={classes.chartTitle} gutterBottom>{props.title}</Typography>
                    { props.data.length ? (
                        <ResponsivePie
                            data={props.data}
                            id={props.id}
                            value={props.value}
                            theme={{
                                textColor: "#EDEDED",
                                tooltip: {
                                    container: {
                                        background: '#000000',
                                    },
                                },
                            }}
                            margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
                            padding={0}
                            isInteractive={true}
                            startAngle={90}
                            endAngle={-270}
                        />
                    ) : (
                        <Typography variant="body2"  className={classes.chartTitle} gutterBottom>No data available</Typography> 
                    )}
                </div>
            </LazyLoad>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    lazyLoad: {
        height: "35vh",
        width: "25%",
        [theme.breakpoints.down('sm')]: {
            width: "50%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
        marginBottom: 35,
    },
    pieContainer: {
        height: "35vh",
        width: "100%",
    },
    chartTitle: {
        margin: "auto",
        textAlign: "center",
    }
  }));