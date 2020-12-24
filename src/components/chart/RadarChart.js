import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import { ResponsiveRadar  } from '@nivo/radar'
import LazyLoad from 'react-lazyload';

export default function RadarChart(props){
    const classes = useStyles();
    return (
        <div className={props.full ? classes.fullLazyLoad : classes.lazyLoad}>
            <LazyLoad 
                placeholder={<Skeleton variant="rect" className={classes.radarContainer} />}
                unmountIfInvisible
                debounce={100}
            >
                <div className={classes.radarContainer}>
                    <Typography variant="h5" color='secondary' className={classes.chartTitle} gutterBottom>{props.title}</Typography>
                    { props.data.length ? (
                        <ResponsiveRadar
                            data={props.data}
                            indexBy={props.indexBy}
                            keys={props.keys}
                            gridShape="linear"
                            dotColor={{ theme: 'textColor'}}
                            theme={{
                                textColor: "#EDEDED",
                                tooltip: {
                                    container: {
                                        background: '#000000',
                                    },
                                },
                            }}
                            margin={props.longText ? { top: 45, right: 40, bottom: 40, left: 40 } : { top: 25, right: 20, bottom: 20, left: 20 }}
                            padding={0}
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
    fullLazyLoad: {
        height: "35vh",
        width: "100%",
        marginBottom: 35,
    },
    radarContainer: {
        height: "35vh",
        width: "100%",
        marginBottom: 35,
    },
    chartTitle: {
        margin: "auto",
        textAlign: "center",
    }
  }));