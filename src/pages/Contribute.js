import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Contribute(){
    const classes = useStyles();
    const theme = useTheme();
    const mobile = window.innerWidth <= theme.breakpoints.values.sm;

    const data = [
        {
            title: "SWEX",
            desc: "Download and install ",
            obj: <ButtonBase><Link href="https://github.com/Xzandro/sw-exporter/releases" variant="body1" className={classes.link}>SWEX</Link></ButtonBase>,
        },
        {
            title: "SWStats Plugin",
            desc: "Download plugin ",
            obj: <ButtonBase><Link href="https://github.com/QuatZo/swex-plugins/releases" variant="body1" className={classes.link}>SWStatistics Logger</Link></ButtonBase>,
        },
        {
            title: "Install plugin",
            desc: "Copy downloaded file to {SWEX Installation Folder}/Plugins"
        },
        {
            title: "Run SWEX",
            desc: "Make sure SWStatistics Logger is enabled in SWEX Options"
        },
        {
            title: "Proxy",
            desc: "Connect device to SWEX proxy"
        },
        {
            title: "Play the game",
            desc: "Run Summoners War and have fun!"
        },
    ]

    return (
        <div className={classes.root}>
            <Timeline align={mobile ? "left" : "alternate"}>
                {data.map((item) => (
                    <TimelineItem className={classes.timelineSeparator}>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <ExpandMoreIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" className={classes.title}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1">
                                    {item.desc} {item.obj}
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
                <TimelineItem className={classes.timelineSeparator}>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <DoneAllIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    link: {
        color: theme.palette.text.secondary,
    },
    timelineSeparator: {
        '&::before': {
            [theme.breakpoints.down('xs')]: {
                content: 'unset',
            }
        }
    }
  }));