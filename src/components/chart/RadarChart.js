import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

import { ResponsiveRadar  } from '@nivo/radar'

export default function RadarChart(props){
    const classes = useStyles();
    return (
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
                    margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
                    padding={0}
                />
            ) : (
                <Typography variant="body2"  className={classes.chartTitle} gutterBottom>No data available</Typography> 
            )}
           
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    radarContainer: {
        height: "35vh",
        width: "25%",
        marginBottom: 35,
        [theme.breakpoints.down('sm')]: {
            width: "50%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    chartTitle: {
        margin: "auto",
        textAlign: "center",
    }
  }));