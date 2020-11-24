import React, {useState, useEffect} from "react";
import axios from "axios";

import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError } from "../exts/Helpers";
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Runes(){
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
                <RadarChart outerRadius={90} width={730} height={250} data={data.rune_set}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" color="secondary"/>
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Rune sets" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            ) : null}
        </>
    )
}