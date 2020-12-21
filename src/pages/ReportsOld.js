import React, { useState, useEffect } from 'react';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

import Loading from '../components/Loading';
import Error from '../components/Error';
import APIEndpoints from '../exts/Endpoints';
import {GenerateAPIHeaders, HandleAPIError} from '../exts/Helpers';

import '../assets/css/style.css'

export default function ImageGridList() {
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
            console.log(resp.data);
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
            <GridList className={classes.gridList + " noscroll"} cols={6}>
                { data.length ? (
                    <Typography cols={8}variant="h2" color="secondary" className={classes.header}>Old reports</Typography>
                    ) : null}
                    {data.map((tile) => (
                    <GridListTile key={tile.monster} cols={tile.cols} rows={2}>
                        <img src={"https://swstats.info/static/website/reports/" + tile.filename} alt={tile.monster} />
                        <GridListTileBar
                        title={tile.monster}
                        subtitle={<span>Date: {tile.date}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${tile.monster}`} className={classes.icon} component="a" href={"https://swstats.info/static/website/reports/" + tile.filename}>
                                <InfoIcon />
                            </IconButton>
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
    }
}));