import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

import { ResponsivePie  } from '@nivo/pie'

export default function PieChart(props){
    const classes = useStyles();
    return (
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
                    margin={{ top: 20, right: 50, bottom: 20, left: 50 }}
                    padding={0}
                    isInteractive={true}
                    startAngle={90}
                    endAngle={-270}
                />
            ) : (
                <Typography variant="body2"  className={classes.chartTitle} gutterBottom>No data available</Typography> 
            )}
           
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    pieContainer: {
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