import React, {useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

import RadarChart from '../components/chart/RadarChart';
import BarChart from '../components/chart/BarChart';

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError } from "../exts/Helpers";
import Loading from '../components/Loading';
import Error from '../components/Error';
import RuneFilterForm from "../components/rune/RuneFilterForm";

export default function Runes(){
    const initFilters = {
        slot: [],
        stars: [],
        quality: [],
        quality_original: [],
        rune_set_id: [],
        primary: [],
        innate: [],
        substats: [],
        upgrade_curr: [null, null],
        efficiency: [null, null],
        equipped: '',
        equipped_rta: '',
        locked: '',
    }
    const classes = useStyles();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [taskId, setTaskId] = useState(null);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [filters, setFilters] = useState(initFilters)
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
                        setData(resp.data.step)
                        setLoading(false);
                    }
                    if(resp.data.status === 'FAILURE'){
                        setErrorData(HandleAPIError(resp));
                        setError(true);
                        setLoading(false);
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

    const handleMultiSelectChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }
    const handleMultiSelectDelete = (field, value) => {
        let vals = {...filters}[field]
        let index = vals.indexOf(value)
        if(index !== -1) vals.splice(index, 1)
        setFilters({...filters, [field]: vals})
    }

    const handleSelectChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value});
    }

    const handleSliderChange = (field, e, val) => {
        setFilters({...filters, [field]: val})
    }

    function handleReset(){
        setFilters(initFilters)
        // reload DATA after AXIOS here, without LOADING or LOADING with ABSOLUTE
    }

    function handleSubmit(){
        // reload DATA after AXIOS here, without LOADING or LOADING with ABSOLUTE
    }

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
                <>
                    <RuneFilterForm 
                        data={data.filters}
                        handleMultiSelectChange={handleMultiSelectChange}
                        handleMultiSelectDelete={handleMultiSelectDelete}
                        handleSelectChange={handleSelectChange}
                        handleSliderChange={handleSliderChange}
                        handleReset={handleReset}
                        handleSubmit={handleSubmit}
                        filters={filters}
                    />
                    <BarChart 
                        title="Sets"
                        data={data.chart_data.rune_set}
                        indexBy="name"
                        groupBy="index"
                        keys={['count']}
                        layout="horizontal"
                    />
                    <BarChart 
                        title="Primary stats"
                        data={data.chart_data.rune_primaries}
                        indexBy="name"
                        groupBy="index"
                        keys={['count']}
                        layout="horizontal"
                    />
                    <RadarChart 
                        title="Slots"
                        data={data.chart_data.rune_slot}
                        indexBy="name"
                        keys={['count']}
                    />
                    <RadarChart 
                        title="Stars"
                        data={data.chart_data.rune_stars}
                        indexBy="name"
                        keys={['count']}
                    />
                    <RadarChart 
                        title="Quality"
                        data={data.chart_data.rune_qualities}
                        indexBy="name"
                        keys={['count', 'original']}
                    />
                    <RadarChart 
                        title="Level"
                        data={data.chart_data.rune_level}
                        indexBy="name"
                        keys={['count']}
                    />
                </>
            ) : null}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
}));