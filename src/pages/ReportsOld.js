import React, { useState, useEffect } from 'react';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Typography from '@material-ui/core/Typography';

import Loading from '../components/Loading';
import Error from '../components/Error';
import APIEndpoints from '../exts/Endpoints';
import {GenerateAPIHeaders, HandleAPIError} from '../exts/Helpers';
import MonstersIcon from '../icons/MonstersIcon';

import '../assets/css/style.css'

export default function ReportsOld() {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(APIEndpoints.ReportsOld, {
            headers: GenerateAPIHeaders() 
        })
        .then((resp) => {
            setData(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            <GridList className={classes.gridList + " noscroll"} cols={6} spacing={10}>
                { data.length ? (
                    <Typography cols={6} variant="h2" color="secondary" className={classes.header}>Reports</Typography>
                    ) : null}
                    {data.map((tile) => (
                    <GridListTile key={tile.monster} cols={tile.cols} rows={2} className={classes.tile}>
                        <img src={"https://swstats.info/static/website/reports/" + tile.filename} alt={tile.monster} />
                        <GridListTileBar
                        title={tile.monster}
                        subtitle={tile.date}
                        actionIcon={
                            <div className={classes.actions}>
                                {!tile.filename.includes('&') ? (
                                    <IconButton aria-label={`redirect to ${tile.monster}`} className={classes.icon} component="a" href={"/monsters/?base_monster__name=" + tile.monster.replace('(2a)', '').replace('_', ' ')} target="_blank">
                                        <MonstersIcon />
                                    </IconButton>
                                ) : null}
                                
                                <IconButton aria-label={`full screen infographic about ${tile.monster}`} className={classes.icon} component="a" href={"https://swstats.info/static/website/reports/" + tile.filename} target="_blank">
                                    <FullscreenIcon />
                                </IconButton>
                            </div>
                        }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 10,
    },
    gridList: {
      width: "100%",
      height: "calc(100vh - 90px)",
      transform: 'translateZ(0)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    header: {
        height: "unset !important",
        textAlign: "center",
        marginBottom: 10,
    },
    tile: {
        [theme.breakpoints.down('md')]: {
            width: "25%!important",
        },
        [theme.breakpoints.down('sm')]: {
            width: "50%!important",
        },
    },
    actions: {
        display: "flex",
    }
}));