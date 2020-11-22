import React, {useEffect, useState} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

import {GenerateAPIHeaders, HandleAPIError} from '../../exts/Helpers';
import APIEndpoints from '../../exts/Endpoints';
import Loading from "../Loading";
import Error from "../Error";

export default function MonsterCard(props){
    const classes = useStyles();

    const [data, setData] = useState(null)
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({})


    useEffect(() => {
        axios.get(APIEndpoints.Monster + props.id + '/', {
            headers: GenerateAPIHeaders()
        })
        .then((resp) => {
            setData(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res));
            setError(true);
        })
    }, [])

    

    return (
        <div className={classes.root}>
            {err ? (<Error title={errorData.title} msg={errorData.msg} embed/>) : (
                 data === null ? <Loading embed /> : (
                    <p>Monster card here in the future: {data.id}</p>
                )
            )}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 300,
        minWidth: 300,
        width: 300,
        maxWidth: 300,
    },
  }));