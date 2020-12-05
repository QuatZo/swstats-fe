import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

import { ResponsiveBar  } from '@nivo/bar'

export default function BarChart(props){
    const classes = useStyles();

    return (
        <div className={props.full ? classes.fullBarContainer : classes.barContainer}>
            <Typography variant="h5" color='secondary' className={classes.chartTitle} gutterBottom>{props.title}</Typography>
            { props.data.length ? (
                <ResponsiveBar
                    data={props.data}
                    indexBy={props.indexBy}
                    colorBy={props.groupBy}
                    keys={props.keys}
                    theme={{
                        textColor: "#EDEDED",
                        tooltip: {
                            container: {
                                background: '#000000',
                            },
                        },
                    }}
                    layout={props.layout} // "horizontal", "vertical"
                    enableGridX={true}
                    margin={{ top: 0, right: 0, bottom: 50, left: 85 }}
                    padding={0}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: props.XTickRotation ?? 0,
                        legend: props.legendX,
                        legendPosition: 'middle',
                        legendOffset: 40,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: props.legendY,
                        legendPosition: 'middle',
                        legendOffset: -80
                    }}
                />
            ) : (
                <Typography variant="body2"  className={classes.chartTitle} gutterBottom>No data available</Typography> 
            )}
            
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    barContainer: {
        height: "35vh",
        width: "50%",
        marginBottom: 35,
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    fullBarContainer: {
        height: "35vh",
        width: "100%",
        marginBottom: 35,
    },
    chartTitle: {
        margin: "auto",
        textAlign: "center",
    }
}));