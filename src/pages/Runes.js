import React, {useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

import { ResponsiveBar } from '@nivo/bar'

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError } from "../exts/Helpers";
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Typography } from "@material-ui/core";

export default function Runes(){
    const classes = useStyles();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [taskId, setTaskId] = useState(null);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    let axiosIntervalID = null;

    useEffect(() => {
        axios.get(APIEndpoints.Runes, {
            headers: GenerateAPIHeaders(),
        })
        .then((resp) => {
            setTaskId(resp.data.task_id)
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            setError(true);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        // cleanup
        return (() => {
            if(axiosIntervalID) clearInterval(axiosIntervalID);
        })
    })

    useEffect(() => {
        if(taskId){
            axiosIntervalID = setInterval(() => {
                axios.get(APIEndpoints.Status + taskId + '/', {
                    headers: GenerateAPIHeaders()
                })
                .then((resp) => {
                    if(resp.data.status === 'SUCCESS'){
                        console.log(resp.data.step)
                        setData(resp.data.step)
                        setLoading(false);
                    }
                    if(resp.data.status === 'FAILURE'){
                        setErrorData(HandleAPIError(resp));
                        setError(true);
                    }
                })
                .catch((err_res) => {
                    setErrorData(HandleAPIError(err_res));
                    setError(true);
                    setLoading(false);
                })
            }, 250)
        }
    }, [taskId])

    return (
        <>
            { loading && <Loading />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
                <div className={classes.chartContainer}>
                    <Typography variant="h5" color='secondary' className={classes.chartTitle}>Rune sets</Typography>
                    <ResponsiveBar
                        data={data.rune_set}
                        indexBy="name"
                        colorBy="index"
                        keys={['count']}
                        theme={{
                            textColor: "#EDEDED",
                            tooltip: {
                                container: {
                                    background: '#000000',
                                },
                            },
                        }}
                        layout="horizontal"
                        enableGridX={true}
                        margin={{ top: 0, right: 0, bottom: 100, left: 85 }}
                        padding={0}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Count',
                            legendPosition: 'middle',
                            legendOffset: 40
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Rune set',
                            legendPosition: 'middle',
                            legendOffset: -80
                        }}
                    />
                </div>
            ) : null}
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    chartContainer: {
        height: "50vh",
        width: "50%",
    },
    chartTitle: {
        margin: "auto",
        textAlign: "center",
    }
  }));